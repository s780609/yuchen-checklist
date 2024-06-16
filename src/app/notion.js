import { Client } from "@notionhq/client";

export default async function Notion() {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const pages = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  //console.log("pages ===> ", pages);
//   console.log("pages.results[0].properties ===> ", pages.results[0].properties);
//   console.log("pages.results[0].properties.Text ===> ", pages.results[0].properties.Text);
  console.log("pages.results[0].properties.Text.rich_text ===> ", pages.results[0].properties.Text.rich_text);
  console.log("pages.results[0].properties.Text.rich_text[0] ===> ", pages.results[0].properties.Text.rich_text[0]);
  //   console.log(pages.results[0].properties.Name.title[0]);
  //   console.log(pages.results[0].properties.Tags.multi_select[0]);
  //   console.log(pages.results[0].properties.Tags.multi_select[1]);
  //   console.log(pages.results[0].properties.Tags.multi_select[2]);

  //   const page1 = pages.results[0].url;
  //   const page1DatabaseId = page1.replace("https://www.notion.so/", "");

  //   const page1Database = await notion.databases.query({
  //     database_id: page1DatabaseId,
  //   });

  //   console.log("page1DatabaseId ===> ", page1DatabaseId);
  //   console.log("page1Database ===> ", page1Database);

  return <>notion database</>;
}
