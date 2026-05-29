const QUIZ_QUESTIONS = [
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "ゴールを守る人はだれ？",
    "choices": [
      "フォワード",
      "ゴールキーパー",
      "サイドの選手"
    ],
    "answerIndex": 1,
    "note": "ゴールキーパーはゴールを守る人だよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "点を取ることをねらうことが多い人は？",
    "choices": [
      "フォワード",
      "ゴールキーパー",
      "審判"
    ],
    "answerIndex": 0,
    "note": "フォワードは相手ゴールの近くでチャンスをねらうよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "自分のゴールの近くで相手を止める人は？",
    "choices": [
      "ディフェンダー",
      "フォワード",
      "ベンチの人"
    ],
    "answerIndex": 0,
    "note": "ディフェンダーはゴールを守るために相手を止めるよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "攻めることも守ることもする真ん中の人は？",
    "choices": [
      "ミッドフィルダー",
      "ゴールキーパー",
      "コーチ"
    ],
    "answerIndex": 0,
    "note": "ミッドフィルダーは攻めと守りをつなぐよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "サイドとは、コートのどのあたり？",
    "choices": [
      "横のほう",
      "ゴールの中",
      "ベンチの後ろ"
    ],
    "answerIndex": 0,
    "note": "サイドは右や左の横のほうだよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "右サイドと言われたら、どこを意識する？",
    "choices": [
      "右のほう",
      "左のほう",
      "ゴールの中"
    ],
    "answerIndex": 0,
    "note": "右サイドは右の横の場所だよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "左サイドと言われたら、どこを意識する？",
    "choices": [
      "左のほう",
      "右のほう",
      "ベンチ"
    ],
    "answerIndex": 0,
    "note": "左サイドは左の横の場所だよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "センターとは、コートのどのあたり？",
    "choices": [
      "真ん中",
      "外",
      "ゴールの後ろ"
    ],
    "answerIndex": 0,
    "note": "センターは真ん中のあたりだよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "プレー中、ゴールキーパーが決められた場所で特別に使える体の部分は？",
    "choices": [
      "手",
      "背中",
      "頭"
    ],
    "answerIndex": 0,
    "note": "ゴールキーパーは決められた場所で手を使えるよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "ディフェンダーが大事にすることは？",
    "choices": [
      "自分のゴールを守る",
      "ずっと相手ゴールにいる",
      "ボールを見ない"
    ],
    "answerIndex": 0,
    "note": "まずは自分のゴールを守る準備が大事だよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "フォワードも守ることはある？",
    "choices": [
      "ある",
      "ない",
      "いつも寝ている"
    ],
    "answerIndex": 0,
    "note": "フォワードも相手のパスをじゃますることがあるよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "ディフェンダーも攻めることはある？",
    "choices": [
      "ある",
      "ない",
      "ボールにさわってはいけない"
    ],
    "answerIndex": 0,
    "note": "チャンスの時はディフェンダーも攻めを助けるよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "ポジションは、ずっと同じ場所に止まること？",
    "choices": [
      "ちがう",
      "そう",
      "走ってはいけない"
    ],
    "answerIndex": 0,
    "note": "ポジションは目安。試合では動くことも大事だよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "コーチに言われた場所が分からない時は？",
    "choices": [
      "聞いてみる",
      "何もしない",
      "怒る"
    ],
    "answerIndex": 0,
    "note": "分からない時は聞いていいよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "味方が攻めている時、後ろの人は何を考える？",
    "choices": [
      "取られた時の準備",
      "ボールを見ない",
      "座る"
    ],
    "answerIndex": 0,
    "note": "攻めている時も、取られた時の準備をするよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "味方が守っている時、前の人は何をする？",
    "choices": [
      "相手のパスをじゃまする",
      "何もしない",
      "ゴールの中に入る"
    ],
    "answerIndex": 0,
    "note": "前の人も守りを助けられるよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "パスをもらいやすい場所に動くのはだれの仕事？",
    "choices": [
      "みんな",
      "ゴールキーパーだけ",
      "フォワードだけ"
    ],
    "answerIndex": 0,
    "note": "サッカーはみんなで助け合うスポーツだよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "ボールから遠すぎる時は、どうするとよい？",
    "choices": [
      "もらえる場所に少し動く",
      "ずっと止まる",
      "後ろを向く"
    ],
    "answerIndex": 0,
    "note": "少し動くとパスをもらいやすくなるよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "ポジションで一番大事なのは？",
    "choices": [
      "自分の場所と次の動きを考える",
      "名前だけ覚える",
      "ずっと同じ場所にいる"
    ],
    "answerIndex": 0,
    "note": "名前より、何をするかが大事だよ。"
  },
  {
    "category": "position",
    "categoryLabel": "ポジション",
    "question": "はじめての場所でプレーする時は？",
    "choices": [
      "まずコーチの話を聞く",
      "何も聞かずに走る",
      "ボールをかくす"
    ],
    "answerIndex": 0,
    "note": "まず話を聞くと、どこで何をするか分かるよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "プレー中、ふつうの選手が手でボールをさわっていい？",
    "choices": [
      "だめ",
      "いつでもいい",
      "眠い時だけいい"
    ],
    "answerIndex": 0,
    "note": "ふつうの選手は手を使わないよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "ゴールキーパーはどこでも手を使える？",
    "choices": [
      "決められた場所だけ",
      "どこでも使える",
      "相手ゴールの中だけ"
    ],
    "answerIndex": 0,
    "note": "ゴールキーパーも手を使える場所が決まっているよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "ボールが横の線から外に出たら、何で始めることが多い？",
    "choices": [
      "スローイン",
      "ゴールキック",
      "じゃんけん"
    ],
    "answerIndex": 0,
    "note": "横の線から出たらスローインで始めることが多いよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "スローインは何を使って投げる？",
    "choices": [
      "両手",
      "片足",
      "頭だけ"
    ],
    "answerIndex": 0,
    "note": "スローインは両手で投げるよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "相手を手で強く押していい？",
    "choices": [
      "だめ",
      "いい",
      "点を取ったらいい"
    ],
    "answerIndex": 0,
    "note": "相手を強く押すのは危ないよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "相手の足をけってボールを取っていい？",
    "choices": [
      "だめ",
      "いつでもいい",
      "コーチが見ていなければいい"
    ],
    "answerIndex": 0,
    "note": "足をけるとけがにつながるよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "審判の笛が鳴ったらどうする？",
    "choices": [
      "いったん止まる",
      "もっと走る",
      "ボールを遠くへ投げる"
    ],
    "answerIndex": 0,
    "note": "笛が鳴ったら、まず止まって話を聞こう。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "試合が始まる時は、どこから始まることが多い？",
    "choices": [
      "真ん中",
      "ベンチ",
      "ゴールの後ろ"
    ],
    "answerIndex": 0,
    "note": "試合は真ん中から始まることが多いよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "ゴールに入ったらどうなる？",
    "choices": [
      "点が入る",
      "試合がなくなる",
      "全員休む"
    ],
    "answerIndex": 0,
    "note": "ボールがゴールに入ると点が入るよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "ラインの外に出たボールは、ずっとプレーを続ける？",
    "choices": [
      "いったん止まる",
      "続ける",
      "手で持って走る"
    ],
    "answerIndex": 0,
    "note": "外に出たら、決まった方法で始め直すよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "味方が倒れて痛そうな時は？",
    "choices": [
      "大人に知らせる",
      "そのまま遊ぶ",
      "笑う"
    ],
    "answerIndex": 0,
    "note": "痛そうな時は大人に知らせよう。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "試合中、ボールが2つ入ってきたら？",
    "choices": [
      "大人や審判の話を聞く",
      "2つともける",
      "かくす"
    ],
    "answerIndex": 0,
    "note": "危ない時は止まって話を聞くよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "コーナーキックは、どこからける？",
    "choices": [
      "コーナー",
      "真ん中",
      "ベンチ"
    ],
    "answerIndex": 0,
    "note": "コーナーキックは角のところからけるよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "相手がボールをゴールラインの外に出した時、ゴールキックをするのは？",
    "choices": [
      "守っていたチーム",
      "点を取ったチーム",
      "見ていた人"
    ],
    "answerIndex": 0,
    "note": "相手が外に出した時、守っていたチームから始めることがあるよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "ファウルをしたら、どうする？",
    "choices": [
      "いったん止まって切り替える",
      "怒る",
      "逃げる"
    ],
    "answerIndex": 0,
    "note": "ファウルしても、次のプレーに切り替えよう。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "相手のユニフォームを引っぱっていい？",
    "choices": [
      "だめ",
      "少しならいつでもいい",
      "勝っていたらいい"
    ],
    "answerIndex": 0,
    "note": "引っぱると相手が転ぶことがあるよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "ボールをける前に、まわりを見てもいい？",
    "choices": [
      "いい",
      "だめ",
      "ゴールキーパーだけいい"
    ],
    "answerIndex": 0,
    "note": "まわりを見ると味方や相手が分かるよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "試合中、分からないことがあったら？",
    "choices": [
      "コーチや審判の話を聞く",
      "ルールを作る",
      "ボールを持って帰る"
    ],
    "answerIndex": 0,
    "note": "分からない時は大人の話を聞こう。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "相手がボールを持っている時、後ろから強くぶつかっていい？",
    "choices": [
      "だめ",
      "いい",
      "点を取りたい時だけいい"
    ],
    "answerIndex": 0,
    "note": "後ろから強くぶつかるのは危ないよ。"
  },
  {
    "category": "rules",
    "categoryLabel": "ルール",
    "question": "サッカーで大事なことは？",
    "choices": [
      "ルールを守って楽しくプレーする",
      "相手を押す",
      "笛を聞かない"
    ],
    "answerIndex": 0,
    "note": "ルールを守ると、みんなで楽しくできるよ。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "味方がボールを持ったら、何をするとよい？",
    "choices": [
      "パスをもらえる場所に動く",
      "後ろを向く",
      "ずっと止まる"
    ],
    "answerIndex": 0,
    "note": "味方を助ける場所に動こう。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "ボールを取られたら、まずどうする？",
    "choices": [
      "取り返しに行く",
      "泣いて止まる",
      "ベンチに行く"
    ],
    "answerIndex": 0,
    "note": "取られても次の一歩が大事だよ。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "ドリブル中に顔を少し上げるのはなぜ？",
    "choices": [
      "まわりを見るため",
      "空を見るため",
      "目をつぶるため"
    ],
    "answerIndex": 0,
    "note": "まわりを見ると味方や相手が分かるよ。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "パスをもらう時は、どこにいるとよい？",
    "choices": [
      "味方が出しやすい場所",
      "相手の後ろでかくれる",
      "ゴールの中"
    ],
    "answerIndex": 0,
    "note": "味方が見える場所に動こう。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "守る時は、相手と何の間に入るとよい？",
    "choices": [
      "相手と自分のゴール",
      "相手とベンチ",
      "相手と空"
    ],
    "answerIndex": 0,
    "note": "ゴールを守れる場所に立とう。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "ボールが遠くにある時も、見るものは？",
    "choices": [
      "ボールとまわり",
      "靴だけ",
      "空だけ"
    ],
    "answerIndex": 0,
    "note": "ボールが遠くても準備できるよ。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "味方の近くに行きすぎるとどうなる？",
    "choices": [
      "相手も集まりやすい",
      "必ず点が入る",
      "ボールが消える"
    ],
    "answerIndex": 0,
    "note": "近すぎるより、少し離れると助けやすいよ。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "ボールを止める時に大事なことは？",
    "choices": [
      "足をやわらかくする",
      "思いきりける",
      "目をつぶる"
    ],
    "answerIndex": 0,
    "note": "やさしく止めると次のプレーがしやすいよ。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "パスを出す前に見るとよいものは？",
    "choices": [
      "味方と相手",
      "空だけ",
      "自分の手"
    ],
    "answerIndex": 0,
    "note": "見てからけると、いいパスになりやすいよ。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "ドリブルで相手が前にいる時は？",
    "choices": [
      "よける方向を考える",
      "まっすぐぶつかる",
      "止まって寝る"
    ],
    "answerIndex": 0,
    "note": "相手を見て、右か左を選ぼう。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "ボールを持っていない時もプレーしている？",
    "choices": [
      "している",
      "していない",
      "ゴールキーパーだけしている"
    ],
    "answerIndex": 0,
    "note": "ボールがない時の動きも大事だよ。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "味方が困っている時は？",
    "choices": [
      "パスをもらえる場所に動く",
      "遠くで止まる",
      "かくれる"
    ],
    "answerIndex": 0,
    "note": "助ける場所に動くと味方が楽になるよ。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "相手が近づいてきたら、何を考える？",
    "choices": [
      "運ぶ、パス、止まる",
      "目をつぶる",
      "ボールを手で持つ"
    ],
    "answerIndex": 0,
    "note": "いくつかの選び方があるよ。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "ボールをけった後は、どうする？",
    "choices": [
      "次の場所に動く",
      "その場で終わり",
      "座る"
    ],
    "answerIndex": 0,
    "note": "けった後も次のプレーがあるよ。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "相手ゴールへ近づく時、ボールはどこにあるとよい？",
    "choices": [
      "自分の近く",
      "すごく遠く",
      "手の中"
    ],
    "answerIndex": 0,
    "note": "ボールが近いと動かしやすいよ。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "守る時に、相手だけを見てボールを見ないのは？",
    "choices": [
      "むずかしくなる",
      "かならずよい",
      "ルールで決まっている"
    ],
    "answerIndex": 0,
    "note": "相手とボールの両方を少し見よう。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "パスをもらう前に声を出すのは？",
    "choices": [
      "味方に知らせるため",
      "相手を怒るため",
      "審判を呼ぶため"
    ],
    "answerIndex": 0,
    "note": "声で味方に場所を知らせられるよ。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "ボールが来る前に体の向きを作ると？",
    "choices": [
      "次のプレーがしやすい",
      "ボールがなくなる",
      "走れなくなる"
    ],
    "answerIndex": 0,
    "note": "前を見やすい向きにできるといいね。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "せまい場所でドリブルする時は？",
    "choices": [
      "小さくタッチする",
      "大きくける",
      "ボールを見ない"
    ],
    "answerIndex": 0,
    "note": "せまい場所ではボールを近くに置こう。"
  },
  {
    "category": "movement",
    "categoryLabel": "動き方",
    "question": "広い場所で前が空いていたら？",
    "choices": [
      "前に運ぶ",
      "すぐ後ろに下がる",
      "手で持つ"
    ],
    "answerIndex": 0,
    "note": "前が空いていたら運ぶチャンスだよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "ミスをした時、次に考えることは？",
    "choices": [
      "次は何を試すか",
      "もうやめる",
      "友だちのせいにする"
    ],
    "answerIndex": 0,
    "note": "ミスは次のチャレンジにつながるよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "友だちがミスした時、何と言うとよい？",
    "choices": [
      "次いこう",
      "なんでできないの",
      "もうパスしない"
    ],
    "answerIndex": 0,
    "note": "前向きな声でチームを助けよう。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "負けた後に考えるとよいことは？",
    "choices": [
      "次に試すこと",
      "誰が悪いか",
      "もう練習しないこと"
    ],
    "answerIndex": 0,
    "note": "負けた日も成長のヒントがあるよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "勝った後に大事なことは？",
    "choices": [
      "よかったところを思い出す",
      "相手をばかにする",
      "練習を全部やめる"
    ],
    "answerIndex": 0,
    "note": "勝った時も、よかったプレーを見つけよう。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "練習でうまくいかない時は？",
    "choices": [
      "ゆっくりやってみる",
      "すぐ怒る",
      "ボールを投げる"
    ],
    "answerIndex": 0,
    "note": "ゆっくりならできることがあるよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "今日の目標は、いくつくらいがよい？",
    "choices": [
      "1つ",
      "100こ",
      "0こ"
    ],
    "answerIndex": 0,
    "note": "1つできたら成功にしよう。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "チャレンジして失敗したら？",
    "choices": [
      "チャレンジしたこともよい",
      "ぜんぶだめ",
      "もうサッカーできない"
    ],
    "answerIndex": 0,
    "note": "チャレンジしたことは成長だよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "友だちがよいプレーをしたら？",
    "choices": [
      "ナイスと言う",
      "だまる",
      "怒る"
    ],
    "answerIndex": 0,
    "note": "よい声はチームを元気にするよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "試合前に決めるとよいことは？",
    "choices": [
      "今日チャレンジすること",
      "絶対ミスしないこと",
      "友だちと比べること"
    ],
    "answerIndex": 0,
    "note": "チャレンジを1つ決めると動きやすいよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "うまい子を見た時は？",
    "choices": [
      "まねできるところを探す",
      "自分はだめと思う",
      "見ない"
    ],
    "answerIndex": 0,
    "note": "まねは上達のヒントだよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "コーチの話を聞く時は？",
    "choices": [
      "目と耳を向ける",
      "ボールをけり続ける",
      "遠くへ行く"
    ],
    "answerIndex": 0,
    "note": "話を聞くと、次に何をするか分かるよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "分からない時に聞くのは？",
    "choices": [
      "よいこと",
      "悪いこと",
      "反則"
    ],
    "answerIndex": 0,
    "note": "聞けるのも大事な力だよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "ずっと怒りながら練習すると？",
    "choices": [
      "楽しくなくなりやすい",
      "かならずうまくなる",
      "ルールになる"
    ],
    "answerIndex": 0,
    "note": "楽しく続けることも大事だよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "自分よりうまい子がいたら？",
    "choices": [
      "よいところを見つける",
      "いやなことを言う",
      "サッカーをやめる"
    ],
    "answerIndex": 0,
    "note": "よいところを見つけると学べるよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "自分ができたことは？",
    "choices": [
      "覚えておく",
      "すぐ忘れる",
      "だめなことにする"
    ],
    "answerIndex": 0,
    "note": "できたことを覚えると自信になるよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "今日は疲れていると感じたら？",
    "choices": [
      "軽めにする",
      "いつもより無理する",
      "痛くても走る"
    ],
    "answerIndex": 0,
    "note": "疲れている日は軽めでもOKだよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "練習が楽しかったら？",
    "choices": [
      "またやりたい気持ちを大事にする",
      "もっと怒られる",
      "忘れる"
    ],
    "answerIndex": 0,
    "note": "楽しい気持ちは続ける力になるよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "できない動きがあったら？",
    "choices": [
      "小さく分けて練習する",
      "すぐあきらめる",
      "友だちを責める"
    ],
    "answerIndex": 0,
    "note": "足、体、ボールに分けると分かりやすいよ。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "試合中に失敗しても、次にできることは？",
    "choices": [
      "もう一回チャレンジする",
      "ずっと下を向く",
      "ボールから逃げる"
    ],
    "answerIndex": 0,
    "note": "次のプレーに切り替えよう。"
  },
  {
    "category": "mindset",
    "categoryLabel": "考え方",
    "question": "サッカーを続けるために大事なことは？",
    "choices": [
      "楽しむこと",
      "いつも怒ること",
      "友だちと比べること"
    ],
    "answerIndex": 0,
    "note": "楽しいから続けられるよ。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "足が痛い時はどうする？",
    "choices": [
      "大人に言う",
      "がまんして走る",
      "もっと強くける"
    ],
    "answerIndex": 0,
    "note": "痛い時は大人に言おう。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "頭をぶつけた時は？",
    "choices": [
      "すぐ大人に言う",
      "だまって続ける",
      "走り続ける"
    ],
    "answerIndex": 0,
    "note": "頭をぶつけた時はすぐ知らせよう。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "暑くて気持ち悪い時は？",
    "choices": [
      "休んで大人に言う",
      "もっと走る",
      "水を飲まない"
    ],
    "answerIndex": 0,
    "note": "暑い日は無理しないことが大事だよ。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "のどがかわいた時は？",
    "choices": [
      "水分をとる",
      "がまんする",
      "走る"
    ],
    "answerIndex": 0,
    "note": "水分をとると体を守れるよ。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "練習前にするとよいことは？",
    "choices": [
      "体を少し動かす",
      "いきなり全力でける",
      "靴をぬぐ"
    ],
    "answerIndex": 0,
    "note": "体を少し起こしてから始めよう。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "家の前で強いキックをしていい？",
    "choices": [
      "だめ",
      "いつでもいい",
      "車が来たらいい"
    ],
    "answerIndex": 0,
    "note": "家の前では強いキックは危ないよ。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "車や自転車が来たら？",
    "choices": [
      "止まる",
      "ボールを追いかける",
      "走って横切る"
    ],
    "answerIndex": 0,
    "note": "車や自転車が来たら止まろう。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "人が多い公園では？",
    "choices": [
      "キックを控える",
      "強くける",
      "人に向かってける"
    ],
    "answerIndex": 0,
    "note": "人が多い時は足元の練習にしよう。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "ボールが道路に出たら？",
    "choices": [
      "大人に言って安全を確認する",
      "すぐ飛び出す",
      "目をつぶる"
    ],
    "answerIndex": 0,
    "note": "飛び出しは危ないよ。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "靴ひもがほどけたら？",
    "choices": [
      "直してから始める",
      "そのまま走る",
      "もっと速く走る"
    ],
    "answerIndex": 0,
    "note": "転ばないように直そう。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "雨で地面がすべる時は？",
    "choices": [
      "ゆっくりやる",
      "全力で走る",
      "わざとすべる"
    ],
    "answerIndex": 0,
    "note": "すべる日はゆっくり安全にしよう。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "暗い場所で練習する時は？",
    "choices": [
      "見える場所で大人と確認する",
      "見えなくても強くける",
      "車の近くでやる"
    ],
    "answerIndex": 0,
    "note": "暗い時は見える場所で安全にしよう。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "体がとても疲れている時は？",
    "choices": [
      "軽くするか休む",
      "もっと長くやる",
      "痛くても走る"
    ],
    "answerIndex": 0,
    "note": "休むこともサッカーの準備だよ。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "ボールを人に向かって強くけっていい？",
    "choices": [
      "だめ",
      "いい",
      "近ければいい"
    ],
    "answerIndex": 0,
    "note": "人に当たると危ないよ。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "練習中にめまいがしたら？",
    "choices": [
      "止めて大人に言う",
      "もっと走る",
      "だまって続ける"
    ],
    "answerIndex": 0,
    "note": "めまいは無理しない合図だよ。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "ボールを拾う時にまず見るものは？",
    "choices": [
      "まわり",
      "空",
      "靴の色"
    ],
    "answerIndex": 0,
    "note": "まわりを見てから取りに行こう。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "リフティングをする時、人が近くにいたら？",
    "choices": [
      "離れてからやる",
      "そのままやる",
      "人に近づく"
    ],
    "answerIndex": 0,
    "note": "ボールが当たらない場所でやろう。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "ゴールや壁に強くける前に確認することは？",
    "choices": [
      "周りに人や物がないか",
      "何も見ない",
      "目をつぶる"
    ],
    "answerIndex": 0,
    "note": "強くける前は周りを確認しよう。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "練習後にするとよいことは？",
    "choices": [
      "体を少し休める",
      "すぐ全力で走る",
      "水を飲まない"
    ],
    "answerIndex": 0,
    "note": "終わった後は体を落ち着かせよう。"
  },
  {
    "category": "safety",
    "categoryLabel": "安全",
    "question": "安全で一番大事なことは？",
    "choices": [
      "危ないと思ったら止まる",
      "がまんする",
      "何も見ない"
    ],
    "answerIndex": 0,
    "note": "危ない時に止まれるのは大事な力だよ。"
  }
];
