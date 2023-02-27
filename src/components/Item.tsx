import React, { Component } from 'react';

type Element = {
  id: number;
  img: string;
  price: number;
  title: string;
  desc: string;
};

interface Props {
  item: Element;
  onAdd: (item: Element) => void;
}

export class Item extends Component<Props> {
  render() {
    const { id, img, price, title, desc } = this.props.item;

    return (
      <div className="item">
        <img
          alt={'image' + id}
          src={require('../img/' + img)}
          // src={'./img/' + this.props.item.img}
        />
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>{new Intl.NumberFormat().format(price)}Грн</p>
        <div
          className="add-to-cart"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </div>
      </div>
    );
  }
}
