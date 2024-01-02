import Volunteer from "@components/volunteer/Volunteer";
import Intro from "./Intro";
import ArticleList from "./articles/ArticleList";
import HeroArticle from "./articles/HeroArticle";

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
