import CommonModel from "./commonModel";
// import dynamic from "next/dist/shared/lib/dynamic";

class StoryModel extends CommonModel {
  constructor() {
    super();
  }

  fromJson<T extends string | any[]>(json: any) {
    const currentPage = json.items[0];
    const componentsEntry = json.includes.Entry;
    const componentsAsset = json.includes.Asset;
    this.setPageContent(currentPage.fields.pageContent, componentsEntry);

    this.replaceComponentById(this.getPageContent(), componentsAsset);

    return this.getPageContent();
  }
}

export default new StoryModel();
