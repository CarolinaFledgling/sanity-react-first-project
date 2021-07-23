import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Post() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="post"] {
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
        }
      }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);
  return (
    <main>
      <section>
        <h1>Blog Posts Page</h1>
        <h2>Welcome! to my page of blog posts</h2>
        <div>
          <article>
            <Link>
              <span>
                <img />
                <span>
                  <h3></h3>
                </span>
              </span>
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
