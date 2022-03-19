const XMLstring =
    `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`

const parser = new DOMParser();
const XMLDom = parser.parseFromString(XMLstring, 'text/xml');
const studentNode = XMLDom.querySelectorAll('student');
// const nameNode = studentNode.querySelector('name');
// const firstNode = nameNode.querySelector('first');
// const secondNode = nameNode.querySelector('second');
// const ageNode = studentNode.querySelector('age');
// const profNode = studentNode.querySelector('prof');
// const langAttr = nameNode.getAttribute('lang');

let result = {
    list: []
}
for (let i = 0; i < studentNode.length; i++) {
    firstNode = studentNode[i].querySelector('first').textContent;
    secondNode = studentNode[i].querySelector('second').textContent;
    ageNode = studentNode[i].querySelector('age').textContent;
    profNode = studentNode[i].querySelector('prof').textContent;
    langAttr = studentNode[i].querySelector('name').getAttribute('lang')

    let student = {
        name: `${firstNode} ${secondNode}`,
        age: ageNode,
        prof: profNode,
        lang: langAttr
    }
    result.list.push(student);
}

console.log(result);