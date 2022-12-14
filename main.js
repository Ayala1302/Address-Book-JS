let arrayOfPosts;

window.onload = function () {
  getPosts();
};

const getPosts = () => {
  fetch("https://randomuser.me/api/?results=25")
    .then((res) => res.json())
    .then((posts) => {
      arrayOfPosts = posts.results;
      console.log(arrayOfPosts);
    });
};

const consolePosts = () => {
  console.log(arrayOfPosts);
};

const displayPost = () => {
  const allPosts = document.getElementById("all-posts");

  arrayOfPosts.map((user) => {
    const li = document.createElement("li");
    const source = user.picture.thumbnail;
    const img = document.createElement("img");
    img.src = source;
    const text = document.createTextNode(
      `First Name: ${user.name.first}, Last Name: ${user.name.last},`
    );
    li.appendChild(text);
    allPosts.append(li);
    allPosts.append(img);

    const moreInfo = document.createElement("button");
    moreInfo.innerHTML = "More Info";
    moreInfo.onclick = () => {
      const text = document.createTextNode(
        `DOB: ${user.dob.date}, Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city} ${user.location.state} ${user.location.postcode}`
      );
      li.appendChild(text);
    };
    li.appendChild(moreInfo);
  });
};
