import React, { FC } from "react";

import { Avatar } from "../../index";

interface IEntryProps {
  place: number;
  name: string;
  score: number;
}

export const Entry: FC<IEntryProps> = ({ place, name, score }) => (
  <tr>
    <td className="board__cell">{place}</td>
    <td className="board__cell">
      <Avatar size="s" />
    </td>
    <td className="board__cell">{name}</td>
    <td className="board__cell board__score">{score}</td>
  </tr>
);
