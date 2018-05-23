// @ts-check
import {html, LitElement} from '../../modules/lit-html-element/lit-element.js';

export class MatButton extends LitElement {
    render() {
      return html`
        <style>
          .btn {
            display: inline-block;
            position: relative;
            box-sizing: border-box;
            min-width: 5.14em;
            margin: 0 0.29em;
            background: transparent;
            text-align: center;
            font: inherit;
            text-transform: uppercase;
            outline: none;
            border-radius: 3px;
            user-select: none;
            cursor: pointer;
            z-index: 0;
            padding: 0.7em 0.57em;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
            background-color:rgba(63, 81, 181, 1.0);
            color: white;
          }
          .btn:hover {
            box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
            background-color:rgba(63, 81, 181, 0.8);
          }
        </style>
        <div class="btn">
          <slot></slot>
        </div>
      `;
    }
  }
  customElements.define('mat-button', MatButton);
  