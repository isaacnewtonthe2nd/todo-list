import "./styles.css";
import { formatDistance, subDays, addDays, format } from "date-fns";
import { addProject, removeProject, projects, tasks } from "./project";



addProject("Fix cars in driveway");
projects[0].addTask('Replace the Range Rover Solenoid', 'Get solenoid from a JLR dealership and replace it in school', '02-28-2025', 'p1');
addProject("Get a Porsche 911");
projects[1].addTask('Finish the Odin Course', 'Get a good Job as well as try to get my Bachelors', '02-28-2025', 'p1');
