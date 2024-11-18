import { CollectionCard } from './@components/cards';
import NFTCard from './@components/cards/nft-card';
import Layout from './@components/layout';
import Tab from './@components/tab';

export default function App() {
  return (
    <div className="app-page">
      <Layout.Header />
      <Layout.SubHeader />

      <Tab.TabContainer>
        <Tab.TabHeader>
          <Tab.TabHeaderItem>
            <a href="#">NFTs</a>
          </Tab.TabHeaderItem>
          <Tab.TabHeaderItem>
            <a href="#">Collections</a>
          </Tab.TabHeaderItem>
        </Tab.TabHeader>

        <Tab.TabPanelGroup>
          <Tab.TabPanel className="nfts">
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
          </Tab.TabPanel>

          <Tab.TabPanel className="collections">
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
          </Tab.TabPanel>
        </Tab.TabPanelGroup>
      </Tab.TabContainer>

      <Layout.Footer />
    </div>
  );
}
