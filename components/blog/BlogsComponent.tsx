import Volunteer from "@components/volunteer/Volunteer";
import Intro from "./Intro";
import ArticleList from "./home-articles/ArticleList";
import HeroArticle from "./home-articles/HeroArticle";

export default function BlogsComponent() {
  return (
    <main>
      <Intro />
      <div className="flex justify-center">
        <ArticleList />
      </div>
      <Volunteer />
    </main>
  );
}
