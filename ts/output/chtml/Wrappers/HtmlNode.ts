/*************************************************************
 *
 *  Copyright (c) 2022 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/**
 * @fileoverview  Implements the CHTMLHtmlNode wrapper for the HtmlNode object
 *
 * @author dpvc@mathjax.org (Davide Cervone)
 */

import {CHTMLWrapper, CHTMLConstructor} from '../Wrapper.js';
import {CommonHtmlNodeMixin} from '../../common/Wrappers/HtmlNode.js';
import {HtmlNode} from '../../../core/MmlTree/MmlNodes/HtmlNode.js';
import {StyleList as StyleList} from '../../../util/StyleList.js';

/*****************************************************************/
/**
 * The CHTMLhtmlNode wrapper for the HtmlNode object
 *
 * @template N  The HTMLElement node class
 * @template T  The Text node class
 * @template D  The Document class
 */
export class CHTMLHtmlNode<N, _T, _D> extends CommonHtmlNodeMixin<any, CHTMLConstructor<any, any, any>>(CHTMLWrapper) {

  /**
   * The html wrapper
   */
  public static kind = HtmlNode.prototype.kind;

  /**
   * @override
   */
  public static styles: StyleList = {
    'mjx-html': {
      'line-height': 'normal',
      'text-align': 'initial'
    },
    'mjx-html-holder': {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%'
    }
  };

  /**
   * @override
   */
  public toCHTML(parent: N) {
    this.markUsed();
    this.chtml = this.adaptor.append(parent, this.getHTML());
  }

}
