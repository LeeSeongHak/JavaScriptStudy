const memberArray = ['egoing', 'praphittie','leezhce'];
//배열은 .으로 접근이 불가능.
console.log("memberArray[2]", memberArray[2]);

const memberObject = {
    manager:'egoing',
    developer:'graphittie',
    designer:'leezhce'
}

//객체는 .으로도 접근이 가능하고 키값으로도 접근가능하다.
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);

//수정
memberObject.designer = 'leezche';

//삭제
delete memberObject.manager;
console.log('after delete memberObject.manager', memberObject.manager);




