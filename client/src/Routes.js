import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";
import Signup from "./components/signup/Signup";
import MeetingUp from "./components/meeting/MeetingUp";
import MeetingIn from "./components/meeting/MeetingIn";
import { Route, Switch } from "react-router-dom";
import MeetingCon from "./components/meeting/MeetingCon";
import My from "./components/my/My";
import Room from "./components/room/Room";
import OnRoute from "./OnRoute";
import OutRoute from "./OutRoute";

export const Routes = () => {
  return (
    <Switch>
      <OutRoute path="/" exact component={Home} />
      <OutRoute path="/signup" component={Signup} />
      <OnRoute path="/auth" exact component={Auth} />
      <OnRoute path="/auth/meeting_in" component={MeetingIn} />
      <OnRoute path="/auth/meeting_up" component={MeetingUp} />
      <OnRoute path="/auth/meeting_con" component={MeetingCon} />
      <OnRoute path="/room/:roomID" component={Room} />
      <OnRoute path="/my" exact component={My} />
      <Route
        render={({ location }) => (
          <div>
            <h2>이 페이지는 존재하지 않습니다</h2>
            <p>{location.pathname}</p>
          </div>
        )}
      />
    </Switch>
  );
};
