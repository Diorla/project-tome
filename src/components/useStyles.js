//@ts-check
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  browser: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    marginLeft: 8,
  },
  browserHome: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  projects: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-start",
  },
  link: {
    padding: 4,
  },
  input: {
    display: "flex",
    flexDirection: "column",
    padding: 8,
  },
  drawer: {
    width: 240,
  },
  drawerContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: 240,
  },
  tree: {
    flexGrow: 1,
    maxWidth: 400,
    marginBottom: 30,
    userSelect: "none",
    padding: 4,
  },
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  select: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    fontSize: 16,
    borderRight: 0,
    padding: 4,
    borderColor: theme.palette.primary.dark,
    outline: "none",
  },
  info: {
    color: theme.palette.secondary.main,
    textAlign: "center",
  },
  header: {
    textAlign: "center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginTop: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fullWidth: {
    width: "100%",
  },
  successButton: {
    color: theme.palette.success.main,
  },
  dangerButton: {
    color: theme.palette.error.main,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    background: "rgba(0, 0, 0, 0.2)",
    margin: 8,
    marginRight: 0,
    marginLeft: 0,
  },
  toolbar: {
    display: "flex",
    background: "black",
    zIndex: 100,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    padding: 6,
  },
  toolbarIcon: {
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: 4,
    "&:hover": {
      color: "#2196F3",
    },
  },
  activeToolbarIcon: {
    border: "none",
    color: "#2196F3",
    cursor: "pointer",
    padding: 4,
  },
  editor: {
    borderBottom: "1px solid silver",
    marginTop: 30,
    padding: 4,
    fontFamily: "arial",
    "& h1": {
      textAlign: "center",
      justifyContent: "space-around",
      display: "flex",
    },
    "& blockquote": {
      margin: 0,
      marginBottom: 8,
      borderLeft: "4px solid darkslategray",
      padding: 8,
      background: "rgba(0, 0, 0, 0.1)",
    },
    "& h2, h3": {
      marginBottom: 2,
    },
  },
  white: {
    backgroundColor: "white",
  },
  hidePlaceholder: {
    "& .public-DraftEditorPlaceholder-root": {
      display: "none",
    },
  },
  nav: {
    display: "flex",
    position: "sticky",
    flexDirection: "row",
    top: 32,
    zIndex: 10,
  },
  row: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
}));
