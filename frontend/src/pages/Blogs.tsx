import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return <div>
        <Appbar /> 
        <div className="flex justify-center">
            <div className="max-w-xl">
                <BlogCard 
                    authorName={"Ishav Singh"}
                    title={"How an Ugly Singly-Page Website Makes $5,000 a Month with Affiliate Marketing"}
                    content={"How an Ugly Singly-Page Website Makes $5,000 a Month with Affiliate Marketing How an Ugly Singly-Page Website Makes $5,000 a Month with Affiliate Marketing"}
                    publishedDate={"13 Jun 2024"}
                />
                <BlogCard 
                    authorName={"Ishav Singh"}
                    title={"How an Ugly Singly-Page Website Makes $5,000 a Month with Affiliate Marketing"}
                    content={"How an Ugly Singly-Page Website Makes $5,000 a Month with Affiliate Marketing How an Ugly Singly-Page Website Makes $5,000 a Month with Affiliate Marketing"}
                    publishedDate={"13 Jun 2024"}
                />
                <BlogCard 
                    authorName={"Ishav Singh"}
                    title={"How an Ugly Singly-Page Website Makes $5,000 a Month with Affiliate Marketing"}
                    content={"How an Ugly Singly-Page Website Makes $5,000 a Month with Affiliate Marketing How an Ugly Singly-Page Website Makes $5,000 a Month with Affiliate Marketing"}
                    publishedDate={"13 Jun 2024"}
                />
            </div>
        </div>
    </div>
}