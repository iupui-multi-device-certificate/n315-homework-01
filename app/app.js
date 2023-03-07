//why is Prettier adding a comma after aboutModel but not aboutView??
import { homeModel, blogModel, aboutModel } from "./models/model.js";

import { homeView, blogView, aboutView, contactView } from "./views/view.js";

const homeContent = homeView(homeModel);
const blogContent = blogView(blogModel);
const aboutContent = aboutView(aboutModel);
const contactContent = contactView;

const titleBase = "TV Blog";

const changeContent = (contentID) => $("#app").html(eval(contentID));

const changeRoute = () => {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log(hashTag + " " + pageID);
  let contentID = pageID + "Content";
  changeContent(contentID);
  $(document).attr("title", `${titleBase} | ${pageID.toUpperCase()}`);
};

const setHome = () => {
  $("#app").html(homeContent);
};

function initListeners() {
  // $("nav a").click(function (e) {
  //   let aID = e.currentTarget.id;
  //   $(document).attr("title", `TBD | ${aID.toUpperCase()}`);
  //   let contentID = aID + "Content";
  //   changeContent(contentID);
  // });

  $(window).on("hashchange", changeRoute);
  changeRoute();
}
$(document).ready(function () {
  initListeners();
  setHome();
});
