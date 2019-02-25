# mini-openweathermap

openweathermap で天気の情報を取得する，取得したデータを整形するためのミニライブラリ

## インストール方法

```bash
$ yarn add https://github.com/kuro-kuroite/mini-openweathermap.git
```

## 最低動作例

- 本サンプルの依存ライブラリをインストール

```bash
$ yarn add @babel/core @babel/register @babel/polyfill
$ yarn add dotenv
```

- [API Key の取得](https://qiita.com/nownabe/items/aeac1ce0977be963a740#api-key%E3%81%AE%E5%8F%96%E5%BE%97)を行う

  - [OpenWeatherMap Create New Account](http://home.openweathermap.org/users/sign_up) でOpenWeatherMapのアカウントを登録する
  - API Keyが表示されるので，記録する．
  - このAPI Keyを，本サンプルと同じディレクトリの「.env」ファイルに書き込む
    - 本サンプルでは，dotenvライブラリを使用するため，「.env.sample」のような`OPEN_WEATHER_MAP_KEY=xxxxxxxxxxxx`の形式とする

- 以下(index.js)を `node --require @babel/register index.js`で実行

```js
import '@babel/polyfill';
import dotenv from 'dotenv';
import { OpenWeatherMapProxy, OpenWeatherMapForecastList } from '@kuro-kuroite/mini-openweathermap';

// API keyは，セキュリティのため直接プログラムに記述することはない
// 本サンプルでは，dotenv のライブラリを用いて，「.env」ファイルの環境変数としてAPI keyを取得した
// 以下のコードで，`process.env.SOME_ENVIRONMENT_VARIANT`で環境変数を取得できるようになる
const result = dotenv.config();
if (result.error) {
  throw result.error;
}

// 今回は，.env内の環境変数`OPEN_WEATHER_MAP_KEY`にAPI keyがあるものとする
const OPEN_WEATHER_MAP_KEY = process.env.OPEN_WEATHER_MAP_KEY;
const CITY = 'Hachioji,JP';
const LANGUAGE = 'ja';

(async () => {
  try {
    // Web APIのOpenWeatherMapから，天気の情報を取得する基本的なクラス
    const openWeatherMapProxy = new OpenWeatherMapProxy(OPEN_WEATHER_MAP_KEY, {
      city: CITY,
      lang: LANGUAGE,
    });
    const openWeather = await openWeatherMapProxy.fetchCurrentWeather();
    // eslint-disable-next-line no-console
    console.log(openWeather);
  
    // 取得した天気のデータについて，整形をするメソッドを多く持つクラス
    const forecastList = new OpenWeatherMapForecastList(openWeather);

    // 取得した天気のデータ
    const { forecasts } = forecastList;
    // eslint-disable-next-line no-console
    console.log(forecasts);
    
    // 整形するメソッドの一例
    // 引数として渡された天気のデータから最高気温を取り出すメソッド
    const max = forecastList.maxTemperature(forecasts);
    // eslint-disable-next-line no-console
    console.log(`最高気温: ${max}`);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
})();
```

## 公開APIの詳細

基本的には，`OpenWeatherMapProxy`と`OpenWeatherMapForecastList`クラスを知っていればよい．

### new OpenWeatherMapProxy(apiKey: string [, options: Object = { units: 'metric', city: 'Tokyo,JP', lang: 'en'}]): OpenWeatherMapProxy

このクラスは，OpenWeatherMap API から3時間ごと5日分の天気の情報を取得するクラス．
[3時間ごと5日分の天気取得のリファレンス](https://openweathermap.org/forecast5)の仕様にしたがって，[axios](https://www.npmjs.com/package/axios)で実装．
コンストラクタでは，OpenWeatherMap のAPI Keyと天気の情報の取得方法に関するオプションを引数にとる．

すなわち，units, city, ... の部分がOpenWeatherMapの取得方法に関するオプションに相当する．
もちろん，このオプションは一部に過ぎない．
詳細は上述のリファレンスで調べてほしい．

#### .fetchCurrentWeather([city: string = this.params.city]): Object like JSON(def= openWeatherMap Object)

上述リファレンスの*By city name*節に沿って，axiosで5日分の天気の情報を取得する

*Weather parameters in API response*節の*JSON*項のような形のJSON Object(今後，openWeatherMap Objectとする)を返す．

### new OpenWeatherMapForecastList(openWeatherMap: openWeatherMap Object): OpenWeatherMapForecastList

このクラスは，3時間ごと5日分の天気の情報について，様々な操作や整形をするクラス．
OpenWeatherMapProxy.fetchCurrentWeather等で取得した，JSON形式の3時間ごと5日分の天気の情報(openWeatherMap Object)を引数に取る．

#### .forecasts: Array of Forecast Object (def= Forecasts)

openWeatherMap Objectから，天気の情報のみを抽出したインスタンス変数．
openWeatherMap Objectのキーlistに対応する．

今後紹介する多くのメソッドは，このforecasts(今後は，Forecasts)を引数として利用するため，本インスタンス変数を紹介した．

#### .filterForecastsByDateTime(startAt: Date | String | Number [, endAt: Date | String | Number = endOfDay(startAt)]): Forecasts

this.forecasts の配列について，startAt <(=?) date <(=?) endAt の条件を満たすものを返却するメソッド．

日付操作については，[date-fns@2.0.0-alpha.25 toDate](https://date-fns.org/v2.0.0-alpha.25/docs/toDate)を参照するとよい．
正確には，[date-fns-tz](https://www.npmjs.com/package/date-fns-tz) で日本時間にも対応できるようにもなっている．
実装の詳細は，OpenWeatherMapInfoを参照するとよい．

#### .filterForecasts(forecasts: Forecasts, filterConditionCallback: (forecast: Forecast) => Boolean): Forecasts

filterForecastsByDateTimeでの日付を含む，それ以外の制限もかけられる操作へと一般化したメソッド．

MDNの[Array.prototype.filter()
](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)に準じる．
使用方法は，filterForecastsByDateTimeを参考にするとよい．

#### .maxTemperature(forecasts: Forecasts): double

Forecasts の中で最も温度の高い数値を返却するメソッド．

#### .minTemperature(forecasts: Forecasts): double

Forecasts の中で最も温度の低い数値を返却するメソッド．

#### .changeForecasts(forecasts: Forecasts): Forecasts

Forecasts の中で，天気(.weather[0].main)に変更があった部分のみのForecastsを返却する．
比喩としては，`[1, 1, 1, 2, 2, 3, 1, 1]` ならば `[1, 2, 3, 1]` になる．

MDNの[配列内の重複要素を削除](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#%E9%85%8D%E5%88%97%E5%86%85%E3%81%AE%E9%87%8D%E8%A4%87%E8%A6%81%E7%B4%A0%E3%82%92%E9%99%A4%E5%8E%BB%E3%81%99%E3%82%8B) が参考になる．

#### .reduceForecasts(forecasts: Forecasts, reduceCallback: (accumulator: any as a, currentValue: Forecast [,currentIndex: integer]) => a [, initialValue: any = forecasts[0]]): a

Forecasts について，畳み込み操作へと一般化したメソッド．
比喩としては，`const f = (acc, x) => acc + x; reduce([1, 2, 3, 1], f, 0)` ならば，`f(f(f(f(0, 1), 2), 3), 1) === 7` になる．

MDNの[Array.prototype.reduce()
](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) に準じる．
使用方法は，.maxTemperature, .minTemperature, .changeForecastsを参考にするとよい．

#### .concatForecasts(forecasts: Forecasts, makeForecastStringCallback: (forecast: Forecast) => String): String

Forecastの情報を使って作成した文字列への操作を，全てのForecastsに適用したメソッド．
比喩としては，`const f = (x) => x.concat('!\n'); concatForecasts([1, 2, 3, 1], f)` ならば，`1!\n2!\n3!\n1!\n` になる．

MDNの[Array.prototype.reduceRight()
](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) の畳み込み処理を応用．

### 補足(OpenWeatherMapMock)

OpenWeatherMapProxyのモック版として，OpenWeatherMapMockも公開している．
これは，OpenWeatherMap API側の問題(API Key失敗，ネットワークエラー等)と，実装側の問題を分離するためである．

ぜひ，テストプログラム等で使用してほしい．

## 本ライブラリの開発者向け

### 開発

このライブラリは，src/js/index.js(理由: `yarn deploy`)がメインプログラムの記述箇所である．
ライブラリとして公開されている関数，クラスはこのファイルの`export`のみである．
もちろん，ダーティーハックで非公開部分の変更は可能である．

基本的なディレクトリ構成は，[Atomic Design](https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B/) を採用した．
すなわち，原子(atom) -> 分子(molecule) -> 有機体(organism) の多重階層となっている．
これは，Promise化といった単純な関数をatomsに，公開する関数やクラスを organisms に，このorganismsが使用する子関数，子クラスをmolecules に分類するためだ．

この階層の中身は，`ライブラリ・種類名/機能名 or index.js` とした．
特別な意味はないが，ファイルよりはディレクトリとして小分類したかったためである．
内部実装が気になる場合は，この部分のjsファイルを参照するとよい．

もし，本ライブラリを変更した場合は，`yarn deploy`をすると，`dist/` ディレクトリに [Babel](https://babeljs.io/) される．
簡単な実行であれば，`yarn babel-node path/to/file.js` するとよい．
念のために，`sandbox/`は自由に使える場所としており，`yarn deploy:sandbox && node tmp/file.js` でテストも可能だ．

### 整形

もし，jsファイルを整形したい場合は，`yarn .lint` または，`yarn .prettier:all` を試してほしい．
この部分は特にこだわって，作成した．
`scripts/` 以下が，npm-scripts 用のコマンドの実装となっている．

もし，この部分の.babel.jsファイルを変更した場合，`yarn .babel:all`をすると，.js も変更される．

## 最後に

本ライブラリは，出来るだけ美しい開発が出来るように，ディレクトリの階層と整形処理に時間をかけた．
プロジェクトルートにある他のドットファイルについて説明しきれなかったが，もし気になる場合は調べたうえで是非とも試してみてほしい．

補足であるが，JavaScript(Node.js) を使用する場合は，絶対にBabelとPromise(async, await or callback)の理解が必須である．
Babelで最新の書き方を覚え，Node.jsの非同期処理に慣れた後に，自分なりに新しいライブラリを作成してほしい．
ただ，最近はTypeScript が主流みたいなので，挑戦したい方はそちらがいいかもしれない．JS の上位互換でBabelは勝手にやってくれるみたいだし．

その際に，本ライブラリのディレクトリの階層と設定ファイルを参考にしてくれると幸いである．

あぁ，あと強者はWebpackをやるのがよい時間つぶしになるだろう．かといって，Parcelが良いというわけでもない．
私は「Webpack疲れ」をしたのでお勧めはしないが...．あれは，大量の素晴らしいエラーを吐いてくれたので最高？のツールだから．

### License

- [MIT](https://github.com/kuro-kuroite/LICENSE/blob/master/LICENSE.md)
