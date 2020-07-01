//@ts-check
import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles, Link } from "@material-ui/core";
import fs from "fs";
import jsonfile from "jsonfile";
import { OPEN_PROJECT } from "./../redux/constant";
import HelpBar from "../components/HelpBar";

//TODO: Add templates creator.
/**
 * This will basically lead to page where there will list of default/created templates
 * on the sidebar. At the top of the sidebar, there will be a text input to enable
 * user to create a new template. The sidebar will be populated based on the files inside
 * ./template folder.
 * On the browser, there will be a simple editor based on the template in focus(when user
 * clicks a template or create new one)
 * The template editor will basically be like any other editor, and will be available as
 * a dropdown whenever a user wants to create a new document.
 * Note, users may be able to edit default templates, but they can't delete it.
 */
/**
 * Left side of the screen
 * # Start
 * projects[]
 *
 * # Help
 * cheat sheet
 * tips and tricks
 * join newsletter
 * open website
 */
/**
 * Right side of the screen
 * # Customise
 * color theme
 *
 * # Blogs
 * blogs[]
 */
const useStyles = makeStyles((theme) => ({
  home: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 8,
  },
  projects: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-start",
  },
  link: {
    padding: 4,
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const projectDir = `${process.cwd()}/projects`;
  const { openProject } = props;
  const [helpList, setHelpList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  jsonfile.readFile(`${process.cwd()}/src/data/help.json`, (err, val) => {
    if (err) console.log(err);
    else setHelpList(val);
  });

  fs.readdir(projectDir, (err, data) => {
    if (err) throw err;
    // prevent infinite loop of update and re-render
    if (JSON.stringify(projectList) !== JSON.stringify(data))
      setProjectList(data);
  });

  return (
    <div className={classes.home}>
      <div className={classes.projects}>
        <h2 style={{ textAlign: "center" }}>Projects</h2>
        {projectList.map((project, idx) => (
          <Link
            color="primary"
            key={idx}
            onClick={() => {
              openProject(project);
            }}
            component="button"
            className={classes.link}
          >
            {project}
          </Link>
        ))}
      </div>
      <div className={classes.projects}>
        <h2>Help</h2>
        {helpList.map((helpItem, idx) => (
          <HelpBar
            key={idx}
            title={helpItem.title}
            content={helpItem.description}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * @param {{ projectList: []; }} state
 */
const mapStateToProps = (state) => ({
  // content: state.content,
});

/**
 * @param {(arg0: { type: string; projectName: string; }) => any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * @param {string} projectName
   */
  openProject: (projectName) =>
    dispatch({
      type: OPEN_PROJECT,
      projectName,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
