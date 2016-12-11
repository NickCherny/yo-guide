
class ComponentStatic {
  constructor(...props){
  }
  // компонент вот вот будет примонтирован
  componentWillMount(){};
  // компонент примонтирован
  componentDidMount(){};
  // компонент получает новые props
  componentWillReceiveProps(...nextProps){}
  // должен ли компонент обновиться
  shouldComponentUpdate(){}
  // вызывается прямо перет render
  componentnWillUpdate(){}
  // вызывается сразу полсе render
  componentDidUpdate(){}
  // вызываеться перед тем как компонент будет удалён из DOM
  componentWillUnmount(){}
}

export default ComponentStatic;
