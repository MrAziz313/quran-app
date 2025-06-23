import React, { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import { styles } from "../styles/Styles";

const juzData = [
  {
    id: "1",
    name: "Alif Lam Meem",
    arabic: "الم",
    startSurah: "Al-Fatiha",
    endSurah: "Al-Baqarah",
    startPage: 1,
    endPage: 21,
    verses: "7:1 - 2:141",
  },
  {
    id: "2",
    name: "Sayaqool",
    arabic: "سَيَقُولُ",
    startSurah: "Al-Baqarah",
    endSurah: "Al-Baqarah",
    startPage: 22,
    endPage: 41,
    verses: "2:142 - 2:252",
  },
  {
    id: "3",
    name: "Tilka Rusul",
    arabic: "تِلْكَ الرُّسُلُ",
    startSurah: "Al-Baqarah",
    endSurah: "Al-Imran",
    startPage: 42,
    endPage: 61,
    verses: "2:253 - 3:92",
  },
  {
    id: "4",
    name: "Lan Tanaloo",
    arabic: "لَن تَنَالُوا",
    startSurah: "Al-Imran",
    endSurah: "An-Nisa",
    startPage: 62,
    endPage: 81,
    verses: "3:93 - 4:23",
  },
  {
    id: "5",
    name: "Wal Muhsanat",
    arabic: "وَالْمُحْصَنَاتُ",
    startSurah: "An-Nisa",
    endSurah: "An-Nisa",
    startPage: 82,
    endPage: 101,
    verses: "4:24 - 4:147",
  },
  {
    id: "6",
    name: "La Yuhibbullah",
    arabic: "لَا يُحِبُّ اللَّهُ",
    startSurah: "An-Nisa",
    endSurah: "Al-Maidah",
    startPage: 102,
    endPage: 121,
    verses: "4:148 - 5:81",
  },
  {
    id: "7",
    name: "Wa Iza Samiu",
    arabic: "وَإِذَا سَمِعُوا",
    startSurah: "Al-Maidah",
    endSurah: "Al-An'am",
    startPage: 122,
    endPage: 141,
    verses: "5:82 - 6:110",
  },
  {
    id: "8",
    name: "Wa Lau Annana",
    arabic: "وَلَوْ أَنَّنَا",
    startSurah: "Al-An'am",
    endSurah: "Al-A'raf",
    startPage: 142,
    endPage: 161,
    verses: "6:111 - 7:87",
  },
  {
    id: "9",
    name: "Qalal Malao",
    arabic: "قَالَ الْمَلَأُ",
    startSurah: "Al-A'raf",
    endSurah: "Al-Anfal",
    startPage: 162,
    endPage: 181,
    verses: "7:88 - 8:40",
  },
  {
    id: "10",
    name: "Wa A'lamuu",
    arabic: "وَاعْلَمُوا",
    startSurah: "Al-Anfal",
    endSurah: "At-Tawbah",
    startPage: 182,
    endPage: 201,
    verses: "8:41 - 9:92",
  },
  {
    id: "11",
    name: "I'tadhiru",
    arabic: "يَعْتَذِرُونَ",
    startSurah: "At-Tawbah",
    endSurah: "Hud",
    startPage: 202,
    endPage: 221,
    verses: "9:93 - 11:5",
  },
  {
    id: "12",
    name: "Wa Ma Min Da'bbah",
    arabic: "وَمَا مِن دَابَّةٍ",
    startSurah: "Hud",
    endSurah: "Yusuf",
    startPage: 222,
    endPage: 241,
    verses: "11:6 - 12:52",
  },
  {
    id: "13",
    name: "Wa Ma Ubarriu",
    arabic: "وَمَا أُبَرِّئُ",
    startSurah: "Yusuf",
    endSurah: "Ibrahim",
    startPage: 242,
    endPage: 261,
    verses: "12:53 - 14:52",
  },
  {
    id: "14",
    name: "Rubama",
    arabic: "رُّبَمَا",
    startSurah: "Al-Hijr",
    endSurah: "An-Nahl",
    startPage: 262,
    endPage: 281,
    verses: "15:1 - 16:128",
  },
  {
    id: "15",
    name: "Subhan Allahi",
    arabic: "سُبْحَانَ الَّذِي",
    startSurah: "Al-Isra",
    endSurah: "Al-Kahf",
    startPage: 282,
    endPage: 301,
    verses: "17:1 - 18:74",
  },
  {
    id: "16",
    name: "Qal Alam",
    arabic: "قَالَ أَلَمْ",
    startSurah: "Al-Kahf",
    endSurah: "Taha",
    startPage: 302,
    endPage: 321,
    verses: "18:75 - 20:135",
  },
  {
    id: "17",
    name: "Iqtaraba",
    arabic: "اقْتَرَبَ",
    startSurah: "Al-Anbiya",
    endSurah: "Al-Hajj",
    startPage: 322,
    endPage: 341,
    verses: "21:1 - 22:78",
  },
  {
    id: "18",
    name: "Qad Aflaha",
    arabic: "قَدْ أَفْلَحَ",
    startSurah: "Al-Mu'minun",
    endSurah: "Al-Furqan",
    startPage: 342,
    endPage: 361,
    verses: "23:1 - 25:20",
  },
  {
    id: "19",
    name: "Wa Qalallahi",
    arabic: "وَقَالَ الَّذِينَ",
    startSurah: "Al-Furqan",
    endSurah: "An-Naml",
    startPage: 362,
    endPage: 381,
    verses: "25:21 - 27:55",
  },
  {
    id: "20",
    name: "A'man Khalaq",
    arabic: "أَمَّنْ خَلَقَ",
    startSurah: "An-Naml",
    endSurah: "Al-Ankabut",
    startPage: 382,
    endPage: 401,
    verses: "27:56 - 29:45",
  },
  {
    id: "21",
    name: "Utlu Ma Uhiya",
    arabic: "اتْلُ مَا أُوحِيَ",
    startSurah: "Al-Ankabut",
    endSurah: "Al-Ahzab",
    startPage: 402,
    endPage: 421,
    verses: "29:46 - 33:30",
  },
  {
    id: "22",
    name: "Wa Man Yaqnut",
    arabic: "وَمَن يَقْنُتْ",
    startSurah: "Al-Ahzab",
    endSurah: "Yasin",
    startPage: 422,
    endPage: 441,
    verses: "33:31 - 36:27",
  },
  {
    id: "23",
    name: "Wa Maliiya",
    arabic: "وَمَا لِيَ",
    startSurah: "Yasin",
    endSurah: "Az-Zumar",
    startPage: 442,
    endPage: 461,
    verses: "36:28 - 39:31",
  },
  {
    id: "24",
    name: "Fa Man Azlam",
    arabic: "فَمَنْ أَظْلَمُ",
    startSurah: "Az-Zumar",
    endSurah: "Fussilat",
    startPage: 462,
    endPage: 481,
    verses: "39:32 - 41:46",
  },
  {
    id: "25",
    name: "Ilaih Yuraddu",
    arabic: "إِلَيْهِ يُرَدُّ",
    startSurah: "Fussilat",
    endSurah: "Al-Jathiyah",
    startPage: 482,
    endPage: 501,
    verses: "41:47 - 45:37",
  },
  {
    id: "26",
    name: "Ha'a Meem",
    arabic: "حم",
    startSurah: "Al-Ahqaf",
    endSurah: "Adh-Dhariyat",
    startPage: 502,
    endPage: 521,
    verses: "46:1 - 51:30",
  },
  {
    id: "27",
    name: "Qala Fa Ma Khatbukum",
    arabic: "قَالَ فَمَا خَطْبُكُمْ",
    startSurah: "Adh-Dhariyat",
    endSurah: "Al-Hadid",
    startPage: 522,
    endPage: 541,
    verses: "51:31 - 57:29",
  },
  {
    id: "28",
    name: "Qad Sami Allah",
    arabic: "قَدْ سَمِعَ اللَّهُ",
    startSurah: "Al-Mujadila",
    endSurah: "At-Tahrim",
    startPage: 542,
    endPage: 561,
    verses: "58:1 - 66:12",
  },
  {
    id: "29",
    name: "Tabarak Allahi",
    arabic: "تَبَارَكَ الَّذِي",
    startSurah: "Al-Mulk",
    endSurah: "Al-Mursalat",
    startPage: 562,
    endPage: 581,
    verses: "67:1 - 77:50",
  },
  {
    id: "30",
    name: "Amma Yatasaa'aloon",
    arabic: "عَمَّ يَتَسَاءَلُونَ",
    startSurah: "An-Naba",
    endSurah: "An-Nas",
    startPage: 582,
    endPage: 604,
    verses: "78:1 - 114:6",
  },
];

const JuzIndex = ({ navigation }) => {
  const [openJuz, setOpenJuz] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleJuz = (juzId) => {
    setOpenJuz(openJuz === juzId ? null : juzId);
  };

  // API call function for fetching Juz/Para data with Arabic text
  const fetchJuzData = async (juzNumber, juzName) => {
    setLoading(true);

    try {
      // Use Arabic text API endpoint instead of English translation
      const response = await fetch(
        `https://api.alquran.cloud/v1/juz/${juzNumber}/ar.alafasy`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Juz data");
      }

      const data = await response.json();

      // Navigate to JuzDetail screen with the fetched data
      navigation.navigate("JuzDetail", {
        juzNumber: juzNumber,
        juzName: juzName,
        juzData: data.data,
      });
    } catch (error) {
      console.error("Error fetching Juz data:", error);
      Alert.alert(
        "Error",
        "Failed to load Para data. Please check your internet connection and try again.",
        [{ text: "OK" }]
      );
    } finally {
      setLoading(false);
    }
  };

  const handleJuzPress = (juz) => {
    Alert.alert(
      `Open ${juz.name}`,
      `Do you want to open Para ${juz.id} - ${juz.name}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Open",
          onPress: () => fetchJuzData(juz.id, juz.name),
        },
      ]
    );
  };
const renderJuzItem = ({ item }) => (
  <View style={styles.juzCard}>
    <TouchableOpacity
      style={styles.juzCardHeader}
      onPress={() => toggleJuz(item.id)}
      activeOpacity={0.7}
    >
      {/* Para Number Badge */}
      <View style={styles.paraNumberBadge}>
        <Text style={styles.paraNumberText}>{item.id}</Text>
      </View>

      {/* Main Content */}
      <View style={styles.juzMainContent}>
        <View style={styles.juzTitleRow}>
          <Text style={styles.juzEnglishName}>{item.name}</Text>
          <Text style={styles.juzArabicName}>{item.arabic}</Text>
        </View>
        
        <View style={styles.juzMetaInfo}>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Pages</Text>
            <Text style={styles.metaValue}>{item.startPage} - {item.endPage}</Text>
          </View>
          <View style={styles.metaDivider} />
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Surahs</Text>
            <Text style={styles.metaValue}>
              {item.startSurah === item.endSurah 
                ? item.startSurah 
                : `${item.startSurah} to ${item.endSurah}`}
            </Text>
          </View>
        </View>
      </View>

      {/* Expand Icon */}
      <View style={styles.expandIcon}>
        <Text style={[styles.expandIconText, { 
          transform: [{ rotate: openJuz === item.id ? '180deg' : '0deg' }] 
        }]}>
          ▼
        </Text>
      </View>
    </TouchableOpacity>

    {/* Expanded Content */}
    {openJuz === item.id && (
      <View style={styles.expandedContent}>
        <View style={styles.dividerLine} />
        
        <View style={styles.detailsGrid}>
          <View style={styles.detailItem}>
            <View style={styles.detailIcon}>
              <Text style={styles.detailIconText}>📖</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Verses Range</Text>
              <Text style={styles.detailValue}>{item.verses}</Text>
            </View>
          </View>

          <View style={styles.detailItem}>
            <View style={styles.detailIcon}>
              <Text style={styles.detailIconText}>📄</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Total Pages</Text>
              <Text style={styles.detailValue}>{item.endPage - item.startPage + 1}</Text>
            </View>
          </View>

          <View style={styles.detailItem}>
            <View style={styles.detailIcon}>
              <Text style={styles.detailIconText}>🕌</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Coverage</Text>
              <Text style={styles.detailValue}>
                {item.startSurah} {item.startSurah !== item.endSurah && `to ${item.endSurah}`}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.openParaButton, loading && styles.openParaButtonDisabled]}
          onPress={() => handleJuzPress(item)}z
          disabled={loading}
          activeOpacity={0.8}
        >
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator color="#FFFFFF" size="small" />
              <Text style={styles.openParaButtonText}>Loading...</Text>
            </View>
          ) : (
            <View style={styles.buttonContent}>
              <Text style={styles.openParaButtonIcon}>📚</Text>
              <Text style={styles.openParaButtonText}>Open Para {item.id}</Text>
              <Text style={styles.openParaButtonArrow}>→</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    )}
  </View>
);
  // const renderJuzItem = ({ item }) => (
  //   <TouchableOpacity
  //     style={styles.surahCard}
  //     onPress={() => toggleJuz(item.id)}
  //   >
  //     <View style={styles.surahRow}>
  //       <Text style={styles.englishName}>Para : {item.id}</Text>
  //     </View>
  //     <View style={styles.surahRow}>
  //       <Text style={styles.englishName}>{item.name}</Text>
  //       <Text style={styles.arabicName}>{item.arabic}</Text>
  //     </View>

  //     <View style={styles.juzInfo}>
  //       <Text style={styles.pageText}>
  //         Pages: {item.startPage} - {item.endPage}
  //       </Text>
  //       <Text style={styles.pageText}>
  //         {item.startSurah} to {item.endSurah}
  //       </Text>
  //     </View>

  //     {openJuz === item.id && (
  //       <View style={styles.ayatContainer}>
  //         <View style={styles.juzDetails}>
  //           <Text style={styles.detailText}>📖 Verses: {item.verses}</Text>
  //           <Text style={styles.detailText}>
  //             📄 Total Pages: {item.endPage - item.startPage + 1}
  //           </Text>
  //           <Text style={styles.detailText}>🕌 From: {item.startSurah}</Text>
  //           <Text style={styles.detailText}>🕌 To: {item.endSurah}</Text>

  //           <TouchableOpacity
  //             style={styles.openButton}
  //             onPress={() => handleJuzPress(item)}
  //             disabled={loading}
  //           >
  //             {loading ? (
  //               <ActivityIndicator color="white" size="small" />
  //             ) : (
  //               <Text style={styles.openButtonText}>📖 Open Para</Text>
  //             )}
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     )}
  //   </TouchableOpacity>
  // );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Juz Index</Text>
      {/* <Text style={styles.subtitle}>Complete Quran - 30 Parts</Text> */}

      <FlatList
        data={juzData}
        keyExtractor={(item) => item.id}
        renderItem={renderJuzItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default JuzIndex;
