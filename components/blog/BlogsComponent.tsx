import Volunteer from "@components/volunteer/Volunteer";
import Intro from "./Intro";
import ArticleList from "./home-articles/ArticleList";
import HeroArticle from "./home-articles/HeroArticle";

export default function BlogsComponent() {
  return (
    <main>
      <Intro />
      <HeroArticle />
      <ArticleList />
      <Volunteer />
    </main>
  );
}
