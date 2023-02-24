import * as m from "mithril";
import { Button, Input, List, ListItem } from "construct-ui";
import theme from "../theme";

interface Activity {
  name: string;
  repRange: [number, number];
}

function Activities() {
  const activities: Activity[] = [
    {
      name: "demo",
      repRange: [1, 10],
    },
    {
      name: "demo",
      repRange: [1, 10],
    },
  ];

  const workingActivity: Activity = {
    name: "",
    repRange: [0, 0],
  };

  const addActivity = () => {
    activities.push({ ...workingActivity });
    workingActivity.name = "";
    workingActivity.repRange = [0, 0];
  };

  return {
    view: () => (
      <div>
        <List>
          {activities.map((activity) => (
            <ListItem label={activity.name} />
          ))}
        </List>
        <div style={{ marginTop: theme.spacing.units(2) }}>
          <Input
            placeholder="Activity"
            value={workingActivity.name}
            onchange={(e: Event) =>
              (workingActivity.name = (e.target as HTMLInputElement).value)
            }
          />
          <Input
            placeholder="Min reps"
            value={workingActivity.repRange[0]}
            onchange={(e: Event) =>
              (workingActivity.repRange[0] =
                Number.parseInt((e.target as HTMLInputElement).value) || 0)
            }
          />
          <Input
            placeholder="Max reps"
            value={workingActivity.repRange[1]}
            onchange={(e: Event) =>
              (workingActivity.repRange[1] =
                Number.parseInt((e.target as HTMLInputElement).value) || 0)
            }
          />
          <Button label="Add" onclick={addActivity} />
        </div>
      </div>
    ),
  };
}

export default Activities;
