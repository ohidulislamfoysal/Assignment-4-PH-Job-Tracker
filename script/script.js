// Variable declaration
let interviewList= [];
let rejectedList= [];
let total = document.getElementById('total');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const filterSection = document.getElementById('filtered-section')

const allCardSection = document.getElementById('allCards');

const mainContainer = document.querySelector('main');
console.log(mainContainer);
// Counting function
function calTotalCount(){
    total.innerText = allCardSection.children.length
    interview.innerText = interviewList.length
    rejectedList.innerText = rejectedList.length
}
calTotalCount()
// Button toggle function
function toggleStyle(id){
    allFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
    interviewFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
    allFilterBtn.classList.add('bg-white','text-black','border-gray-300', 'hover:bg-gray-100')
    interviewFilterBtn.classList.add('bg-white','text-black','border-gray-300', 'hover:bg-gray-100')
    rejectedFilterBtn.classList.add('bg-white','text-black','border-gray-300', 'hover:bg-gray-100')
    
    const selected = document.getElementById(id);
    selected.classList.remove('bg-white','text-black','border-gray-300', 'hover:bg-gray-100')
    selected.classList.add('bg-[#3B82F6]','text-white')

    if(id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
    }
    else if(id=='all-filter-btn'){
        filterSection.classList.add('hidden')
        allCardSection.classList.remove('hidden')
    }

}

mainContainer.addEventListener('click',function(event){

    if(event.target.classList.contains('interview-btn')){
        const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText
    const jobTittle = parentNode.querySelector('.jobTittle').innerText
    const salary = parentNode.querySelector('.salary').innerText
    const statusBtn = parentNode.querySelector('.status-btn').innerText
    const jobDetails = parentNode.querySelector('.jobDetails').innerText
    parentNode.querySelector('.status-btn').innerText = 'Interview'
    const cardInfo = {
        companyName,
        jobTittle,
        salary,
        statusBtn:'Interview',
        jobDetails
    }
    const companyExist = interviewList.find(item=> item.companyName == cardInfo.companyName)
    
    if(!companyExist){
        interviewList.push(cardInfo)
    }
    calTotalCount()
    renderIntrview()
    }
    
})
function renderIntrview(){
    filterSection.innerHTML= ''
    for(let interview of interviewList) {
        let div = document.createElement('div');
        div.className = 'bg-[#F1F2F4] p-6 mb-4 rounded-lg flex relative'
        div.innerHTML = `<div >
                <h2 class="companyName text-[#002C5C] font-semibold text-[18px]">${interview.companyName}</h2>
                <h3 class="jobTittle text-[#64748B] text-[16px]">${interview.jobTittle}</h3>
                <p class="salary text-[#64748B] text-[14px]">${interview.salary}</p>
                <button class="status-btn text-[#002C5C] bg-[#EEF4FF] p-2 rounded-lg text-[14px] font-semibold">${interview.statusBtn}</button>
                <p class="jobDetails text-[#323B49] text-[14px]">${interview.jobDetails}</p>
                <div class="gap-2 pt-5">
                    <button class="btn interview-btn border border-green-500 text-green-500 font-bold text-[14px]">INTERVIEW</button>
                    <button class="btn rejected-btn border border-red-500 text-red-500 font-bold text-[14px]">REJECTED</button>
                </div>
            </div>
            <div class="absolute top-8 right-6">
                <button class="btn delete border-2 border-gray-200 rounded-full w-12 h-12 flex items-center justify-center"><i class="fa-regular fa-trash-can"></i></button>
            </div>
        `
      filterSection.appendChild(div)  
    }
    
}