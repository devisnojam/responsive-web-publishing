import NFTCard, { CollectionCard } from '../../shared/components/cards';
import Layout from '../../shared/components/layout';
import Tab from '../../shared/components/tab';

export default function MarketplacePage() {
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
