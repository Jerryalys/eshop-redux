import React from "react";
import NotificationAlert from "react-notification-alert";
import { Row, Col } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import NotificationsCard from "components/NotificationsCard/NotificationsCard";
// import buttons from "variables/buttons";


function Notifications() {

  const button1 = {
    color: 'primary',
    name: 'Top Left',
  };
  const button2 = {
    color: 'secondary',
    name: 'Top Center',
  };
  const button3 = {
    color: 'success',
    name: 'Top Right',
  };
  const button4 = {
    color: 'danger',
    name: 'Bottom Left',
  };
  const button5 = {
    color: 'warning',
    name: 'Bottom Center',
  };
  const button6 = {
    color: 'info',
    name: 'Bottom Right',
  };
  const notificationAlert = React.useRef();
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
        options = {
        place: place,
        message: (
        <div>
          <div>
            Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  };
  return (
    <>
      <PanelHeader
        content={
          <div className="header text-center">
            <h2 className="title">Notifications</h2>
          </div>
        }
      />
      <div className="content">
        <NotificationAlert ref={notificationAlert} />
        <Row>
          <Col md={6} xs={12}>
          </Col>
          <Col md={6} xs={12}>
          </Col>
          <Col md={12} xs={12}>
            <NotificationsCard 
              button1={button1}
              button2={button2}
              button3={button3}
              button4={button4}
              button5={button5}
              button6={button6}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
