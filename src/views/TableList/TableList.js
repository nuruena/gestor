import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Turnos</h4>
            <p className={classes.cardCategoryWhite}>
              Turnos para el día de hoy
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="info"
              tableHead={["Name", "Apellido", "Hora", "Zonas", "Telefono"]}
              tableData={[
                ["Dakota", "Rice", "9:00", "1","3564111111"],
                ["Minerva", "Hooper", "9:15","3", "3564111112"],
                ["Sage", "Rodriguez", "9:45","1", "3564111113"],
                ["Philip", "Chaney", "11:00","5", "3564111114"],
                ["Doris", "Greene", "12:00","3", "3564111115"],
                ["Mason", "Porter", "12:30","5", "3564111116"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>

    </GridContainer>
  );
}
