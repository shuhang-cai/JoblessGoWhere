import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import SignUp from "./views/SignUp.vue";
import LoginPage from "./views/LoginPage.vue";
import QuizLifestage from "./views/QuizLifestage.vue";
import QuizIndustry from "./views/QuizIndustry.vue";
import RecommendedPage from "./views/RecommendedPage.vue";
import QuizLoginHeader from "./layout/QuizLoginHeader.vue";
import AccountsNavbar from "./layout/AccountsNavbar.vue";
import ProfilePage from "./views/ProfilePage.vue";
import QuizSkillset from "./views/QuizSkillset.vue";
import QuizCourse from "./views/QuizCourse.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      components: { default: Landing, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/index",
      name: "index",
      components: { default: Index, header: AccountsNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/SignUp",
      name: "SignUp",
      components: { default: SignUp , header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/LoginPage",
      name: "LoginPage",
      components: { default: LoginPage, header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/quiz/lifestage",
      name: "quizlifestage",
      components: { default: QuizLifestage, header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/quiz/industry",
      name: "quizindustry",
      components: { default: QuizIndustry, header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/quiz/skillset",
      name: "quizskillset",
      components: { default: QuizSkillset, header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/quiz/course",
      name: "quizcourse",
      components: { default: QuizCourse, header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/RecommendedPage",
      name: "RecommendedPage",
      components: { default: RecommendedPage, header: QuizLoginHeader },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/ProfilePage",
      name: "ProfilePage",
      components: { default: ProfilePage, header: AccountsNavbar },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode:"history"
});
