function check() {
  //表示されている全てのメモを取得している
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) {
      if (post.getAttribute("data-load") != null){
        return null;
      }
      post.setAttribute("data-load", "true");
      // メモをクリックした場合に実行する処理を定義
      post.addEventListener("click", () => {
        // どのメモをクリックしたのか、カスタムデータを利用して取得している
        const postId = post.getAttribute("data-id");
        // 非同期通信に必要なオブジェクトを生成している
        const XHR = new XMLHttpRequest();
        // openでリクエストを初期化する
        XHR.open("GET", `/posts/${postId}`, true);
        // レスポンスのタイプを指定する
        XHR.responseType = "json";
        // sendでリクエストを送信する
        XHR.send();
        // コントローラーからレスポンスを受け取ったときの処理を記述する
        XHR.onload = () => {
          if (XHR.status != 200) {
            // レスポンスのHTTPステータスを解析し、該当するエラーメッセージをアラートで表示する様にしている
            alert(`Error ${XHR.status}: ${XHR.statusText}`);
            // 処理を終了している
            return null;
          }
          // レスポンスされたデータを変数itemに代入している
          const item = XHR.response.post;
          if (item.checked === true) {
            // 既読状態であれば灰色に変わるCSSを適用するためのカスタムデータを追加している
            post.setAttribute("data-check", "true");
          } else if (item.checked === false) {
            // 既読状態でなければカスタムデータを削除している
            post.removeAttribute("data-check");
          }
        };
   });
 });
}

setInterval(check, 1000);