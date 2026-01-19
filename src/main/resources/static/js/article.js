// 삭제 기능
const deleteButton = document.getElementById('delete-btn');

if (deleteButton) {
  deleteButton.addEventListener('click', event => {
    const id = document.getElementById('article-id').value;

    fetch(`/api/articles/${id}`, {
      method: 'DELETE'
    }).then(res => {
      if (!res.ok) {
        return res.text().then(t => { throw new Error(t); });
      }
      alert('삭제가 완료되었습니다.');
      location.replace('/articles');
    }).catch(err => {
      console.error(err);
      alert('삭제 실패: 콘솔을 확인하세요.');
    });
  });
}

// 수정 기능
const modifyButton = document.getElementById('modify-btn');

if (modifyButton) {
    modifyButton.addEventListener('click', event => {
        let params = new URLSearchParams(location.search);
        let id = params.get('id');

        fetch(`/api/articles/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: document.getElementById('title').value,
                content: document.getElementById('content').value
            })
        })
        .then(() => {
            alert('수정이 완료되었습니다.');
            location.replace(`/articles/${id}`);
        });
    });
}

// 생성 기능
const createButton = document.getElementById('create-btn');

if (createButton) {
    // 클릭 이벤트 감지되면 생성 API 요청
    createButton.addEventListener('click', event => {
        fetch("/api/articles", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                title: document.getElementById("title").value,
                content: document.getElementById("content").value,
            }),
        }).then(() => {
            alert("등록 완료되었습니다.");
            location.replace("/articles");
        });
    });
}