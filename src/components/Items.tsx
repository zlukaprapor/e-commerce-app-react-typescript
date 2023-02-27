import React, { Component } from 'react';
import { Item } from './Item';

type Element = {
  id: number;
  img: string;
  price: number;
  title: string;
  desc: string;
};

interface Props {
  items: Element[];
  onAdd: (item: Element) => void;
}

export class Items extends Component<Props> {
  render() {
    const { items } = this.props;

    return (
      <main>
        {items.map((el) => (
          <Item key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    );
  }
}
