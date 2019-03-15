import { emitter } from './emitter';
import { renderLast, renderList } from '../helpers/actions';

emitter.watch(renderLast);
emitter.watch(renderList);
