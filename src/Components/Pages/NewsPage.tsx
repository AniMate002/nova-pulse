import NewsHeader from "../newspage/NewsHeader";
import NewsList from "../newspage/NewsList";
import NewsSlidingText from "../newspage/NewsSlidingText";
import NewsSubHeader from "../newspage/NewsSubHeader";
import NewsTags from "../newspage/NewsTags";




const NewsPage:React.FC = () => {
    return (
        <div className="bg-gradient-to-r  from-violet-900 to-teal-950 min-h-[100vh] overflow-x-hidden">
            <NewsHeader />
            <NewsSubHeader />
            <NewsSlidingText />
            <NewsTags />
            <NewsList />
        </div>
    );
}
 
export default NewsPage;