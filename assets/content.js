/*
 * マニュアル本文の編集場所です。
 * 新しい機能を追加したら、ここにページを追加・更新してください。
 * HTMLタグを使って見出し・説明・コマンド例を記述できます。
 */
window.GUIDE_CONTENT = {
  updated: "2026-11-21",
  pages: {
    overview: {
      title: "篠澤広 Bot 利用ガイド",
      crumb: "はじめに",
      html: `
        <h1>篠澤広 Bot 利用ガイド</h1>
        <div class="meta">WELCOME / USER DOCUMENTATION</div>
        <p class="lead">このページでは、Discordで利用できるBotの機能や操作方法を確認できます。新しい機能や使い方は、このマニュアルに順次追加していきます。</p>
        <div class="hero-panel"><div class="mini">HIRO BOT</div><strong>お疲れ、プロデューサー。</strong><p>使い方に迷ったときは、左側のメニューから確認してね。</p></div>
        <div class="cards">
          <div class="card"><div class="icon">◈</div><strong>基本的な使い方</strong><p>Botへの話しかけ方、メンションの使い方。</p></div>
          <div class="card"><div class="icon">◎</div><strong>記憶・会話機能</strong><p>長期記憶や会話履歴について。</p></div>
          <div class="card"><div class="icon">⌁</div><strong>散歩記録</strong><p>歩数・距離の記録と確認。</p></div>
          <div class="card"><div class="icon">✳</div><strong>口調・返答設定</strong><p>口調例や返答スタイルの管理。</p></div>
        </div>
        <div class="callout"><strong>このマニュアルについて</strong><p>コマンド名や対応機能はBotの実装状況に合わせて更新します。表示されている操作が利用できない場合は、Bot管理者に確認してください。</p></div>
      `
    },
    basic: {
      title: "基本的な使い方",
      crumb: "基本的な使い方",
      html: `
        <h1>基本的な使い方</h1><div class="meta">01 / GETTING STARTED</div>
        <p class="lead">Botに話しかけるときは、基本的にメッセージ内でBotをメンションします。</p>
        <h2>会話を始める</h2>
        <pre><code>@篠澤広 おはよう
@篠澤広 今日も頑張ろう</code></pre>
        <p>Botがメンションを認識すると、AIが内容に応じて返答します。</p>
        <h2>利用時のポイント</h2>
        <ul><li>Botがオンラインであることを確認してください。</li><li>Botにチャンネルの閲覧・メッセージ送信権限が必要です。</li><li>返答には少し時間がかかる場合があります。</li></ul>
        <div class="callout warn"><strong>注意</strong><p>Botが応答しない場合は、Botの稼働状態とチャンネル権限を確認してください。</p></div>
      `
    },
    memory: {
      title: "記憶・会話機能",
      crumb: "記憶・会話機能",
      html: `
        <h1>記憶・会話機能</h1><div class="meta">02 / MEMORY & CONVERSATION</div>
        <p class="lead">Botは会話履歴や登録された長期記憶を利用して、以前の話題を踏まえた返答を行います。</p>
        <h2>長期記憶を登録する</h2>
        <div class="command-list"><div class="command"><code>覚えて: 内容</code><span>指定した内容を長期記憶に登録します。</span></div></div>
        <pre><code>@篠澤広 覚えて: 私はイラストを描くのが好き</code></pre>
        <h2>記憶について</h2>
        <ul><li>会話履歴と長期記憶は別々に保存されます。</li><li>長期記憶は今後の会話で参照される場合があります。</li><li>登録内容に誤りがある場合は、Bot管理者に修正・削除を依頼してください。</li></ul>
        <div class="callout"><strong>今後追加予定</strong><p>過去の会話を要約し、関連する話題を後日の会話で再利用する機能を追加予定です。実装後、このページを更新します。</p></div>
      `
    },
    walk: {
      title: "散歩記録",
      crumb: "散歩記録",
      html: `
        <h1>散歩記録</h1><div class="meta">03 / WALK LOG</div>
        <p class="lead">歩数や距離をBotに伝えると、散歩記録として保存できます。</p>
        <h2>歩数を記録する</h2>
        <pre><code>@篠澤広 今日は5000歩歩いたよ</code></pre>
        <h2>記録を確認する</h2>
        <div class="command-list">
          <div class="command"><code>今日の記録</code><span>今日の歩数・距離を確認します。</span></div>
          <div class="command"><code>最近の記録</code><span>最近の散歩記録を確認します。</span></div>
        </div>
        <p>距離を入力していない場合は、歩数から概算距離を計算する設定を利用できます。概算値は実際の歩幅によって異なります。</p>
        <div class="callout warn"><strong>記録の重複に注意</strong><p>現在の実装が同日の記録を合算する方式の場合、同じ歩数を何度も送ると重複して加算されます。</p></div>
      `
    },
    style: {
      title: "口調・返答設定",
      crumb: "口調・返答設定",
      html: `
        <h1>口調・返答設定</h1><div class="meta">04 / RESPONSE STYLE</div>
        <p class="lead">会話から口調の候補を抽出し、確認・採用することで返答の雰囲気を調整できます。</p>
        <h2>口調学習の流れ</h2>
        <ul><li>会話から口調の候補を抽出します。</li><li>候補の内容を確認します。</li><li>自然でBotに合っているものを採用します。</li><li>不自然な候補は却下します。</li></ul>
        <h2>返答スタイル</h2>
        <p>返答の長さ、避けたい表現、会話上のルールなどを登録してBotの応答に反映します。</p>
        <div class="callout warn"><strong>コマンド名について</strong><p>口調候補の確認・採用・却下、返答スタイルの登録・一覧などの具体的な入力形式は、現在のmain.pyに実装されているコマンドに合わせて追記してください。</p></div>
      `
    },
    schedule: {
      title: "予定・通知",
      crumb: "予定・通知",
      html: `
        <h1>予定・通知</h1><div class="meta">05 / SCHEDULE & REMINDERS</div>
        <div class="callout"><strong>準備中</strong><p>予定の登録・一覧・削除と、指定時刻のDiscord通知機能を追加予定です。</p></div>
        <h2>追加予定の機能</h2>
        <ul><li>日時と予定内容を登録</li><li>今日・今後の予定を一覧表示</li><li>予定の削除・完了</li><li>指定時刻にDiscordへ通知</li></ul>
        <p>機能が実装されたら、実際のコマンドと利用例をここに掲載します。</p>
      `
    },
    faq: {
      title: "よくある質問",
      crumb: "よくある質問",
      html: `
        <h1>よくある質問</h1><div class="meta">06 / FAQ & TROUBLESHOOTING</div>
        <h2>Botが返事をしない</h2><p>Botが起動しているか、メンションしているか、チャンネル権限があるか確認してください。</p>
        <h2>返答に時間がかかる</h2><p>AIモデルの読み込み状態やPCの負荷によって返答時間が変わります。時間がかかる状態が続く場合は管理者に知らせてください。</p>
        <h2>以前の会話を覚えていない</h2><p>通常の会話履歴と長期記憶は異なります。重要な内容は長期記憶として登録してください。</p>
        <h2>記録を修正・削除したい</h2><p>現在のBotに用意されている管理コマンド、または管理者によるデータベース操作が必要です。</p>
      `
    }
  }
};
