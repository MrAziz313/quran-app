import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/Styles";

const quranData = [
  {
    id: "95",
    name: "At-Tin",
    arabic: "التين",
    page: 595,
    ayat: [
      "وَالتِّينِ وَالزَّيْتُونِ",
      "وَطُورِ سِينِينَ",
      "وَهَٰذَا الْبَلَدِ الْأَمِينِ",
      "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
      "ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ",
      "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ",
      "فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّينِ",
      "أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ",
    ],
  },
  {
    id: "96",
    name: "Al-‘Alaq",
    arabic: "العلق",
    page: 597,
    ayat: [
      "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
      "خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ",
      "اقْرَأْ وَرَبُّكَ الْأَكْرَمُ",
      "الَّذِي عَلَّمَ بِالْقَلَمِ",
      "عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ",
    ],
  },
  {
    id: "98",
    name: "Al-Bayyinah",
    arabic: "البينة",
    page: 598,
    ayat: [
      "لَمْ يَكُنِ ٱلَّذِينَ كَفَرُوا۟ مِنْ أَهْلِ ٱلْكِتَـٰبِ وَٱلْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ ٱلْبَيِّنَةُ",
      "رَسُولٌۭ مِّنَ ٱللَّهِ يَتْلُوا۟ صُحُفًۭا مُّطَهَّرَةًۭ",
      "فِيهَا كُتُبٌۭ قَيِّمَةٌۭ",
      "وَمَا تَفَرَّقَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَـٰبَ إِلَّا مِنۢ بَعْدِ مَا جَآءَتْهُمُ ٱلْبَيِّنَةُ",
      "وَمَآ أُمِرُوٓا۟ إِلَّا لِيَعْبُدُوا۟ ٱللَّهَ مُخْلِصِينَ لَهُ ٱلدِّينَ حُنَفَآءَ",
    ],
  },
  {
    id: "99",
    name: "Az-Zalzalah",
    arabic: "الزلزلة",
    page: 599,
    ayat: [
      "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا",
      "وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا",
      "وَقَالَ الْإِنْسَانُ مَا لَهَا",
      "يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا",
      "بِأَنَّ رَبَّكَ أَوْحَى لَهَا",
      "يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا لِيُرَوْا أَعْمَالَهُمْ",
      "فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ",
      "وَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ",
    ],
  },
  {
    id: "100",
    name: "Al-Adiyat",
    arabic: "العاديات",
    page: 599,
    ayat: [
      "وَالْعَادِيَاتِ ضَبْحًا",
      "فَالْمُورِيَاتِ قَدْحًا",
      "فَالْمُغِيرَاتِ صُبْحًا",
      "فَأَثَرْنَ بِهِ نَقْعًا",
      "فَوَسَطْنَ بِهِ جَمْعًا",
      "إِنَّ الْإِنْسَانَ لِرَبِّهِ لَكَنُودٌ",
      "وَإِنَّهُ عَلَىٰ ذَٰلِكَ لَشَهِيدٌ",
      "وَإِنَّهُ لِحُبِّ الْخَيْرِ لَشَدِيدٌ",
    ],
  },
  {
    id: "101",
    name: "Al-Qari'ah",
    arabic: "القارعة",
    page: 600,
    ayat: [
      "الْقَارِعَةُ",
      "مَا الْقَارِعَةُ",
      "وَمَا أَدْرَاكَ مَا الْقَارِعَةُ",
      "يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ",
      "وَتَكُونُ الْجِبَالُ كَالْعِهْنِ الْمَنْفُوشِ",
      "فَأَمَّا مَن ثَقُلَتْ مَوَازِينُهُ",
      "فَهُوَ فِي عِيشَةٍ رَّاضِيَةٍ",
      "وَأَمَّا مَنْ خَفَّتْ مَوَازِينُهُ",
      "فَأُمُّهُ هَاوِيَةٌ",
      "وَمَا أَدْرَاكَ مَا هِيَهْ",
      "نَارٌ حَامِيَةٌ",
    ],
  },
  {
    id: "97",
    name: "Al-Qadr",
    arabic: "القدر",
    page: 598,
    ayat: [
      "إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ",
      "وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ",
      "لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ",
      "تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا",
      "سَلَامٌ هِيَ حَتَّى مَطْلَعِ الْفَجْرِ",
    ],
  },
  {
    id: "112",
    name: "Al-Ikhlas",
    arabic: "الإخلاص",
    page: 604,
    ayat: [
      "قُلْ هُوَ اللَّهُ أَحَدٌ",
      "اللَّهُ الصَّمَدُ",
      "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
    ],
  },
  {
    id: "113",
    name: "Al-Falaq",
    arabic: "الفلق",
    page: 604,
    ayat: [
      "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
      "مِن شَرِّ مَا خَلَقَ",
      "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
      "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
      "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
    ],
  },
  {
    id: "114",
    name: "An-Nas",
    arabic: "الناس",
    page: 604,
    ayat: [
      "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
      "مَلِكِ النَّاسِ",
      "إِلَٰهِ النَّاسِ",
      "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
      "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
      "مِنَ الْجِنَّةِ وَالنَّاسِ",
    ],
  },
  // Add more small surahs if needed
];

const SurahApp = () => {
  const [openSurah, setOpenSurah] = useState(null);

  const toggleSurah = (surahId) => {
    setOpenSurah(openSurah === surahId ? null : surahId);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Quran App</Text> */}
      <Text style={styles.title}>Surah Index</Text>

      <FlatList
        data={quranData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.surahCard}
            onPress={() => toggleSurah(item.id)}
          >
            <View style={styles.surahRow}>
              <Text style={styles.englishName}>
                {item.id} - {item.name}
              </Text>
              <Text style={styles.arabicName}>{item.arabic}</Text>
            </View>
            <Text style={styles.pageText}>Page no: {item.page}</Text>

            {openSurah === item.id && (
              <View style={styles.ayatContainer}>
                {item.ayat.map((ayat, index) => (
                  <Text key={index} style={styles.ayatText}>
                    {index + 1}. {ayat}
                  </Text>
                ))}
              </View>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SurahApp;
