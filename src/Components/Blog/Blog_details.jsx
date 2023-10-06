import {} from "react";
import Single_blog from "./Single_blog";

function Blog_details() {
  return (
    <div className="px-3 py-10">
      <div className="flex lg:items-center lg:justify-between lg:flex-row md:flex-row md:items-center md:justify-between flex-col space-y-5">
        <p className="text-2xl font-semibold">Know what we,re upto!</p>
        <input
          type="search"
          name="search"
          className="bg-gray-300 px-3 py-2 rounded-full outline-none"
          placeholder="Search"
        />
      </div>
      <Single_blog
        title={"HOW TO ADD ACCORDION TO YOUR WORDPRESS BLOG"}
        des={
          "An accordion dropdown is a great way to organize and present a large amount of content on your WordPress website in a clean and user-friendly way. It allows users to easily expand and collapse sections of content,making it easy to find the information they need. In this blog post, we will go over how […]"
        }
      />
      <Single_blog
        title={"10+ BEST WORDPRESS THEMES FOR PORTFOLIO"}
        des={
          "You’ve got the skills. You’ve got the portfolio. Now, you just need a place to put it all together. You can choose one of these best WordPress Themes for your portfolio. And we’re here to help! We’ve rounded up our favorite WordPress themes for portfolios—the ones that will make your work shine and give you […]"
        }
      />
      <Single_blog
        title={"20+ BEST WORDPRESS THEMES | THEMES WITH AWESOME FEATURES"}
        des={
          "The best WordPress themes are the themes that are developed by professional designers and developers. There are hundreds of WordPress themes out there, but not all of them are good. You need to know what to look for in a WordPress theme if you want to choose the best one for your site. A WordPress […]"
        }
      />
      <Single_blog
        title={"WORDPRESS WEBSITE BUILDERS"}
        des={
          "Introduction WordPress Website Builders: The web has changed a lot in the last decade. In the early 2000s, websites were built using HTML and CSS, but these days there are so many great tools out there that make it easy to build and customize your own website without having to deal with coding every step […]"
        }
      />
      <Single_blog
        title={
          "WHY PREMIUM WORDPRESS THEMES ARE BETTER THAN FREE WORDPRESS THEMES?"
        }
        des={
          "Free WordPress themes Most of the free WordPress themes are designed by individual developers, which is why you will not get regular updates and constant support. These themes undergo a thorough review process before they hit the official WordPress website, WordPress.org, for users to download them freely.Free WordPress themes are quick to load as they […]"
        }
      />
    </div>
  );
}

export default Blog_details;
