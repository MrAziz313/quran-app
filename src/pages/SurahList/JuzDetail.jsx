// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   ScrollView,
//   ActivityIndicator,
//   SafeAreaView,
//   Alert,
// } from "react-native";
// import { style } from "./StyleSurah";

// const JuzDetail = ({ route, navigation }) => {
//   const { juzNumber, juzName, juzData } = route.params;
//   //   console.log("JuzDetail params:", route.params);

//   const [loading, setLoading] = useState(false);
//   const [verses, setVerses] = useState([]);
//   const [selectedSurah, setSelectedSurah] = useState(null);

//   useEffect(() => {
//     if (juzData && juzData.ayahs) {
//       setVerses(juzData.ayahs);
//     }
//   }, [juzData]);

//   // Group verses by Surah
//   const groupVersesBySurah = () => {
//     const grouped = {};
//     verses.forEach((verse) => {
//       const surahNumber = verse.surah.number;
//       const surahName = verse.surah.englishName;
//       const surahArabic = verse.surah.name;

//       if (!grouped[surahNumber]) {
//         grouped[surahNumber] = {
//           surahNumber,
//           surahName,
//           surahArabic,
//           verses: [],
//         };
//       }
//       grouped[surahNumber].verses.push(verse);
//     });
//     return Object.values(grouped);
//   };

//   const groupedVerses = groupVersesBySurah();

//   const renderVerse = ({ item, index }) => (
//     <View style={style.verseContainer}>
//       <Text style={style.verseNumber}>{item.numberInSurah}</Text>
//       <Text style={style.arabicVerse}>{item.text}</Text>
//       {item.translation && (
//         <Text style={style.translationText}>{item.translation}</Text>
//       )}
//     </View>
//   );

//   const renderSurahSection = ({ item }) => (
//     <View style={style.surahSection}>
//       <TouchableOpacity
//         style={style.surahHeader}
//         onPress={() =>
//           setSelectedSurah(
//             selectedSurah === item.surahNumber ? null : item.surahNumber
//           )
//         }
//       >
//         <View style={style.surahRow}>
//           <Text style={style.surahTitle}>
//             {item.surahNumber}. {item.surahName}
//           </Text>
//           <Text style={style.surahArabic}>{item.surahArabic}</Text>
//         </View>
//         <Text style={style.verseCount}>
//           {item.verses.length} verse{item.verses.length > 1 ? "s" : ""}
//         </Text>
//       </TouchableOpacity>

//       {selectedSurah === item.surahNumber && (
//         <FlatList
//           data={item.verses}
//           keyExtractor={(verse) =>
//             `${verse.surah.number}-${verse.numberInSurah}`
//           }
//           renderItem={renderVerse}
//           scrollEnabled={false}
//         />
//       )}
//     </View>
//   );

//   const handleRefresh = async () => {
//     setLoading(true);
//     try {
//       // Refresh API call
//       const response = await fetch(
//         `https://api.alquran.cloud/v1/juz/${juzNumber}/en.asad`
//       );
//       const data = await response.json();
//       setVerses(data.data.ayahs);
//     } catch (error) {
//       Alert.alert("Error", "Failed to refresh data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={style.container}>
//       {/* Header */}
//       <View style={style.detailHeader}>
//         <TouchableOpacity
//           style={style.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Text style={style.backButtonText}>← Back</Text>
//         </TouchableOpacity>

//         <View style={style.headerInfo}>
//           <Text style={style.headerTitle}>Para {juzNumber}</Text>
//           <Text style={style.headerSubtitle}>{juzName}</Text>
//         </View>

//         <TouchableOpacity
//           style={style.refreshButton}
//           onPress={handleRefresh}
//           disabled={loading}
//         >
//           {loading ? (
//             <ActivityIndicator size="small" color="#1E3A8A" />
//           ) : (
//             <Text style={style.refreshText}>↻</Text>
//           )}
//         </TouchableOpacity>
//       </View>

//       {/* Stats */}
//       <View style={style.statsContainer}>
//         {/* <View style={style.statBox}>
//           <Text style={style.statNumber}>{verses.length}</Text>
//           <Text style={style.statLabel}>Total Verses</Text>
//         </View>
//         <View style={style.statBox}>
//           <Text style={style.statNumber}>{groupedVerses.length}</Text>
//           <Text style={style.statLabel}>Surahs</Text>
//         </View> */}
//         <View style={style.statBox}>
//           <Text style={style.statNumber}>{juzNumber}/30</Text>
//           {/* <Text style={style.statLabel}>Para</Text> */}
//         </View>
//       </View>

//       {/* Content */}
//       {verses.length > 0 ? (
//         <FlatList
//           data={groupedVerses}
//           keyExtractor={(item) => item.surahNumber.toString()}
//           renderItem={renderSurahSection}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={style.contentContainer}
//         />
//       ) : (
//         <View style={style.emptyContainer}>
//           <Text style={style.emptyText}>Loading Para data...</Text>
//           <ActivityIndicator size="large" color="#1E3A8A" />
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default JuzDetail;
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  Alert,
} from "react-native";
import { style } from "./StyleSurah"; // Adjust the import path as necessary

const JuzDetail = ({ route, navigation }) => {
  const { juzNumber, juzName, juzData } = route.params;

  const [loading, setLoading] = useState(false);
  const [verses, setVerses] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);

  useEffect(() => {
    if (juzData && juzData.ayahs) {
      setVerses(juzData.ayahs);
    }
  }, [juzData]);

  // Group verses by Surah
  const groupVersesBySurah = () => {
    const grouped = {};
    verses.forEach((verse) => {
      const surahNumber = verse.surah.number;
      const surahName = verse.surah.englishName;
      const surahArabic = verse.surah.name;

      if (!grouped[surahNumber]) {
        grouped[surahNumber] = {
          surahNumber,
          surahName,
          surahArabic,
          verses: [],
        };
      }
      grouped[surahNumber].verses.push(verse);
    });
    return Object.values(grouped);
  };

  const groupedVerses = groupVersesBySurah();

  const renderVerse = ({ item, index }) => (
    <View style={style.verseContainer}>
      <Text style={style.verseNumber}>{item.numberInSurah}</Text>
      {/* Only show Arabic text */}
      <Text style={style.arabicVerse}>{item.text}</Text>
    </View>
  );

  const renderSurahSection = ({ item }) => (
    <View style={style.surahSection}>
      <TouchableOpacity
        style={style.surahHeader}
        onPress={() =>
          setSelectedSurah(
            selectedSurah === item.surahNumber ? null : item.surahNumber
          )
        }
      >
        <View style={style.surahRow}>
          <Text style={style.surahTitle}>
            {item.surahNumber}. {item.surahName}
          </Text>
          <Text style={style.surahArabic}>{item.surahArabic}</Text>
        </View>
        <Text style={style.verseCount}>
          {item.verses.length} verse{item.verses.length > 1 ? "s" : ""}
        </Text>
      </TouchableOpacity>

      {selectedSurah === item.surahNumber && (
        <FlatList
          data={item.verses}
          keyExtractor={(verse) =>
            `${verse.surah.number}-${verse.numberInSurah}`
          }
          renderItem={renderVerse}
          scrollEnabled={false}
        />
      )}
    </View>
  );

  const handleRefresh = async () => {
    setLoading(true);
    try {
      // Use Arabic text API endpoint
      const response = await fetch(
        `https://api.alquran.cloud/v1/juz/${juzNumber}/ar.alafasy`
      );
      const data = await response.json();
      setVerses(data.data.ayahs);
    } catch (error) {
      Alert.alert("Error", "Failed to refresh data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      {/* Header */}
      <View style={style.detailHeader}>
        <TouchableOpacity
          style={style.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={style.backButtonText}>← Back</Text>
        </TouchableOpacity>

        <View style={style.headerInfo}>
          <Text style={style.headerTitle}>Para {juzNumber}/30</Text>
          <Text style={style.headerSubtitle}>{juzName}</Text>
        </View>

        <TouchableOpacity
          style={style.refreshButton}
          onPress={handleRefresh}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#1E3A8A" />
          ) : (
            <Text style={style.refreshText}>↻</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={style.statsContainer}>
        {/* <View style={style.statBox}>
          <Text style={style.statNumber}>{verses.length}</Text>
          <Text style={style.statLabel}>Total Verses</Text>
        </View> */}
        {/* <View style={style.statBox}>
          <Text style={style.statNumber}>{groupedVerses.length}</Text>
          <Text style={style.statLabel}>Surahs</Text>
        </View> */}
        {/* <View style={style.statBox}>
          <Text style={style.statNumber}>{juzNumber}/30</Text>
          <Text style={style.statLabel}>Para</Text>
        </View> */}
      </View>

      {/* Content */}
      {verses.length > 0 ? (
        <FlatList
          data={groupedVerses}
          keyExtractor={(item) => item.surahNumber.toString()}
          renderItem={renderSurahSection}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.contentContainer}
        />
      ) : (
        <View style={style.emptyContainer}>
          <Text style={style.emptyText}>Loading Para data...</Text>
          <ActivityIndicator size="large" color="#1E3A8A" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default JuzDetail;
