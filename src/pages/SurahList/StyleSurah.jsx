import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  // Common Styles
  container: {
    flex: 1,
    backgroundColor: "#012d46",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#1E3A8A",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#6B7280",
    fontStyle: "italic",
  },

  // Card Styles
  surahCard: {
    backgroundColor: "white",
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeft: 4,
    borderLeftColor: "#1E3A8A",
  },
  surahRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  englishName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
    flex: 1,
  },
  arabicName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E3A8A",
    textAlign: "right",
  },
  pageText: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 4,
  },

  // Juz specific styles
  juzInfo: {
    marginVertical: 8,
  },
  juzDetails: {
    backgroundColor: "#F3F4F6",
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  detailText: {
    fontSize: 14,
    color: "#4B5563",
    marginBottom: 6,
    lineHeight: 20,
  },
  openButton: {
    backgroundColor: "#1E3A8A",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  openButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  // Ayat/Verse Styles
  ayatContainer: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  ayatText: {
    fontSize: 16,
    color: "#1F2937",
    marginBottom: 8,
    lineHeight: 24,
    textAlign: "right", // Arabic text alignment
  },

  // JuzDetail specific styles
  detailHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  headerInfo: {
    flex: 1,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "white",
    marginTop: 2,
  },
  refreshButton: {
    padding: 8,
  },
  refreshText: {
    fontSize: 30,
    color: "white",
  },

  // Stats Container
  // statsContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   marginBottom: 20,
  //   backgroundColor: "white",
  //   padding: 16,
  //   borderRadius: 12,
  //   elevation: 2,
  // },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 12,
  },
  statLabel: {
    fontSize: 12,
    color: "white",
    marginTop: 4,
  },

  // Surah Section (in JuzDetail)
  surahSection: {
    marginBottom: 16,
  },
  surahHeader: {
    backgroundColor: "rgba(127, 131, 125, 0.3)", // 0.7 = 70% opacity
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  surahTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    flex: 1,
  },
  surahArabic: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  verseCount: {
    fontSize: 14,
    color: "#E5E7EB",
    marginTop: 4,
  },

  // Verse Container
  verseContainer: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    marginVertical: 4,
    borderRadius: 8,
    borderLeft: 3,
    borderLeftColor: "#1E3A8A",
  },
  verseNumber: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 8,
  },
  arabicVerse: {
    fontSize: 18,
    lineHeight: 30,
    textAlign: "right",
    color: "#1F2937",
    marginBottom: 12,
    fontWeight: "500",
  },
  translationText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4B5563",
    fontStyle: "italic",
  },

  // Content Container
  contentContainer: {
    paddingBottom: 20,
  },

  // Empty State
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#6B7280",
    marginBottom: 16,
  },
});
