const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const main = document.querySelector("main");
posts.forEach((post) => {
  main.innerHTML += `
    <article>
    <header class="post-header">
    <img src="${post["avatar"]}" class="profile-img" />
    <div class="post-author">
    <p class="bold">${post["name"]}</p>
    <p>${post["location"]}</p>
    </div>
    </header>
    <div>
    <img src="${post["post"]}" class="post-img" />
    </div>
    <footer class="post-footer">
    <div class="post-actions">
    <img src="/images/icon-heart.png" class="heart"/>
    <img src="/images/icon-comment.png" />
    <img src="/images/icon-dm.png" />
    </div>
    <p class="bold likes">${post["likes"]} likes</p>
    </footer>
    <p class="comment">
    <span class="bold">${post["username"]}</span> ${post["comment"]}
    </p>
    </article>`;
});
