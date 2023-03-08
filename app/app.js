import { homeModel, blogModel, aboutModel } from "./models/model.js";

import { homeView, blogView, aboutView, contactView } from "./views/view.js";

const titleBase = "Turning Heads";

const routes = {
  home: homeView(homeModel),
  blog: blogView(blogModel),
  about: aboutView(aboutModel),
  contact: contactView,
};

const changeRoute = () => {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  //set to home if empty string
  if (pageID == "") {
    pageID = "home";
  }
  document.getElementById("app").innerHTML = routes[pageID];
  $(document).attr("title", `${titleBase} | ${pageID.toUpperCase()}`);
};

function initListeners() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}
$(document).ready(function () {
  initListeners();
});
