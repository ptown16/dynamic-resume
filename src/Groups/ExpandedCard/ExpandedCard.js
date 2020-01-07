import React from "react";

import "./ExpandedCard.css";

import ThemeDataContext from "Contexts/ThemeDataContext";

import Card from "Groups/Card/Card";
import Button from "Components/Button/Button";
import Table from "Components/Table/Table";

import { setThemeColors } from "Utilities/setThemeColors";

function ExpandedCard({ card }) {
  const theme = React.useContext(ThemeDataContext);
  const colors = setThemeColors(theme, ["cardBackground", "cardText"]);

  let cardButtons;
  if (card.buttons) {
    const cardButtonList = [];
    for (const button of card.buttons) {
      cardButtonList.push(
        <Button key={cardButtonList.length} button={button} newTab />
      );
    }
    cardButtons = <div className="button-container">{cardButtonList}</div>;
  }

  let cardTable;
  if (card.table) {
    cardTable = (
      <div className="table-container">
        <Table table={card.table} />
      </div>
    );
  }

  return (
    <div className="overlain-card">
      <Card card={card} variant="expanded" />
      <div
        className="card-expanded"
        style={{ backgroundColor: colors.cardBackground }}
      >
        {cardButtons}
        {cardTable}
        <p
          className="card-description"
          style={{ color: colors.cardText }}
          dangerouslySetInnerHTML={{ __html: card.description }}
        ></p>
      </div>
    </div>
  );
}

export default ExpandedCard;
