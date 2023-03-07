//why is Prettier adding a comma after aboutModel but not aboutView??
import { homeModel, blogModel, aboutModel } from "./models/model.js";

import { homeView, blogView, aboutView, contactView } from "./views/view.js";

const homeContent = homeView(homeModel);
const blogContent = blogView(blogModel);
const aboutContent = aboutView(aboutModel);
const contactContent = contactView;

const titleBase = "TV Blog";
const changeContent = (contentID) => $("#app").html(eval(contentID));
const setHome = () => {
  $("#app").html(homeContent);
  $(document).attr("title", `${titleBase} | HOME`);
};

function initListeners() {
  $("nav a").click(function (e) {
    let aID = e.currentTarget.id;

    $(document).attr("title", `TBD | ${aID.toUpperCase()}`);

    let contentID = aID + "Content";
    changeContent(contentID);
  });
}
$(document).ready(function () {
  initListeners();
  setHome();
});
