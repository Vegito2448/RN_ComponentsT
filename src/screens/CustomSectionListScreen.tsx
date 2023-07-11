import React from 'react';
import { SectionList, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import { styles } from '../themes/AppTheme';


interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman", "Green Lantern", "Cyborg", "Nightwing", "Supergirl", "Green Arrow", "Martian Manhunter", "Batgirl", "Shazam", "Harley Quinn", "Catwoman", "Robin", "Black Canary", "Zatanna"]
  },
  {
    casa: "Marvel Comics",
    data: ["Iron Man", "Spider-Man", "Hulk", "Captain America", "Thor", "Black Widow", "Wolverine", "Black Panther", "Doctor Strange", "Deadpool", "Cyclops", "Storm", "Gambit", "Jean Grey", "Hawkeye", "Ant-Man", "Scarlet Witch", "Vision"]
  },
  {
    casa: "Anime",
    data: ["Naruto", "Goku", "Luffy", "Sasuke", "Ichigo", "Monkey D. Luffy", "Vegeta", "Saitama", "Eren Yeager", "Light Yagami", "Lelouch Lamperouge", "Edward Elric", "Gon Freecss", "Killua Zoldyck", "Mikasa Ackerman", "Levi Ackerman", "Natsu Dragneel", "Eren Jaeger"]
  }
];


const CustomSectionListScreen = () => {
  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      <SectionList
        sections={casas}
        renderItem={({ item }) => <View><Text>{item}</Text></View>}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title='Section List' />}
        ListFooterComponent={() =>
          <View style={{ marginBottom: 50 }}>
            <HeaderTitle title={`Total de casas: ${casas.length}`} />
          </View>
        }
        renderSectionHeader={({ section: { casa } }) => (
          <View style={{ backgroundColor: 'white' }}><HeaderTitle title={casa} /></View>
        )}
        renderSectionFooter={({ section }) => (
          <HeaderTitle title={`Total: ${section.data.length}`} />
        )}
        // ItemSeparatorComponent={ItemSeparator}
        SectionSeparatorComponent={ItemSeparator}
        showsVerticalScrollIndicator={false}

        stickySectionHeadersEnabled
      />
    </View>
  );
};

export default CustomSectionListScreen;