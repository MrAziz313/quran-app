import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#012d46",
    padding: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginVertical: 20,
    padding: 20,
  },

  surahCard: {
    backgroundColor: "#012d46",
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ffffff50",
  },
  surahRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  englishName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  arabicName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    writingDirection: "rtl",
  },
  pageText: {
    color: "#ddd",
    marginTop: 5,
    fontSize: 12,
  },
  ayatContainer: {
    marginTop: 10,
    backgroundColor: "white",
    // color: "black",
    padding: 10,
    borderRadius: 10,
  },
  ayatText: {
    color: "black",
    fontSize: 16,
    writingDirection: "rtl",
    marginVertical: 2,
  },
  // Add these styles to your Styles.js file

  juzCard: {
    backgroundColor: "#FFFFFF",
    // backgroundColor: "rgba(127, 131, 125, 0.3)",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },

  juzCardHeader: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  paraNumberBadge: {
    backgroundColor: "#4F46E5",
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  paraNumberText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  juzMainContent: {
    flex: 1,
    marginRight: 12,
  },

  juzTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  juzEnglishName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
    flex: 1,
  },

  juzArabicName: {
    fontSize: 20,
    fontWeight: "500",
    color: "#4F46E5",
    textAlign: "right",
    marginLeft: 12,
  },

  juzMetaInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  metaItem: {
    flex: 1,
  },

  metaLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 2,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  metaValue: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "500",
  },

  metaDivider: {
    width: 1,
    height: 24,
    backgroundColor: "#E5E7EB",
    marginHorizontal: 16,
  },

  expandIcon: {
    padding: 8,
  },

  expandIconText: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "bold",
  },

  expandedContent: {
    backgroundColor: "#FFFFFF",
  },

  dividerLine: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginHorizontal: 20,
  },

  detailsGrid: {
    padding: 20,
    gap: 16,
  },

  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#4F46E5",
  },

  detailIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#EEF2FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  detailIconText: {
    fontSize: 16,
  },

  detailContent: {
    flex: 1,
  },

  detailLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    fontWeight: "500",
  },

  detailValue: {
    fontSize: 16,
    color: "#1F2937",
    fontWeight: "600",
  },

  openParaButton: {
    backgroundColor: "#4F46E5",
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#4F46E5",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  openParaButtonDisabled: {
    backgroundColor: "#9CA3AF",
    shadowOpacity: 0,
    elevation: 0,
  },

  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  openParaButtonIcon: {
    fontSize: 18,
    marginRight: 8,
  },

  openParaButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 8,
  },

  openParaButtonArrow: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
