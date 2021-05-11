(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[480],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8638:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={sidebar_label:"trainer",title:"core.trainer"},l={unversionedId:"reference/core/trainer",id:"reference/core/trainer",isDocsHomePage:!1,title:"core.trainer",description:"Trainer module.",source:"@site/docs/reference/core/trainer.md",sourceDirName:"reference/core",slug:"/reference/core/trainer",permalink:"/docs/reference/core/trainer",editUrl:"https://github.com/microsoft/PyMarlin/edit/master/website/docs/reference/core/trainer.md",version:"current",sidebar_label:"trainer",frontMatter:{sidebar_label:"trainer",title:"core.trainer"},sidebar:"referenceSideBar",previous:{title:"core.module_interface",permalink:"/docs/reference/core/module_interface"},next:{title:"core.trainer_backend",permalink:"/docs/reference/core/trainer_backend"}},c=[{value:"TrainerArguments Objects",id:"trainerarguments-objects",children:[]},{value:"AbstractTrainer Objects",id:"abstracttrainer-objects",children:[]},{value:"Trainer Objects",id:"trainer-objects",children:[]}],p={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Trainer module."),(0,i.kt)("h2",{id:"trainerarguments-objects"},"TrainerArguments Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@dataclass\nclass TrainerArguments()\n")),(0,i.kt)("p",null,"Trainer Arguments class."),(0,i.kt)("h2",{id:"abstracttrainer-objects"},"AbstractTrainer Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class AbstractTrainer(ABC)\n")),(0,i.kt)("p",null,"Abstract Trainer class."),(0,i.kt)("h4",{id:"train"},"train"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | @abstractmethod\n | train()\n")),(0,i.kt)("p",null,"Run Train loop"),(0,i.kt)("h4",{id:"validate"},"validate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | @abstractmethod\n | validate()\n")),(0,i.kt)("p",null,"Run eval loop"),(0,i.kt)("h2",{id:"trainer-objects"},"Trainer Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Trainer(AbstractTrainer)\n")),(0,i.kt)("p",null,"Orchestrates model training."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Trainer")," is responsible for coordinating the model definition\n(",(0,i.kt)("inlineCode",{parentName:"p"},"ModuleInterface"),") and the ",(0,i.kt)("inlineCode",{parentName:"p"},"TrainerBackend")," - connecting the high-level\nmodel recipe with the backend on which it will be trained."),(0,i.kt)("p",null,"This accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"module")," implementing ",(0,i.kt)("inlineCode",{parentName:"p"},"ModuleInterface")," - it contains the\nmodel definition, as well as the definition of train and evaluation steps,\noptimizers and schedulers and any optional callbacks."),(0,i.kt)("p",null,"It also accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"TrainerBackend")," defining how the training should be run\ne.g. single node vs distributed training. There are ",(0,i.kt)("inlineCode",{parentName:"p"},"TrainerBackends")," for\nmost common scenarios available out of the box - or alternatively a user can\nprovide a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"TrainerBackend"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"module")," ",(0,i.kt)("em",{parentName:"p"},"ModuleInterface")," - Contains model definition, train and validation\ndefinition, optimizer and scheduler, and optional callbacks.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"args")," ",(0,i.kt)("em",{parentName:"p"},"TrainerArguments")," - Training hyperparameters."),(0,i.kt)("p",{parentName:"li"},"Optional keyword arguments:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"trainer_backend")," ",(0,i.kt)("em",{parentName:"p"},"TrainerBackend")," - How the training will be carried out.\nFor example, the training is distributed and/or using AMP (automatic mixed precision).\nThis can also be specified in args using the backend keyword.\nDefaults to singleprocess. Options are: sp (singleprocess), sp-amp, ddp, ddp-amp.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"checkpointer")," ",(0,i.kt)("em",{parentName:"p"},"AbstractCheckpointer")," - Used to handle model checkpointing."))),(0,i.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | __init__(module: module_interface.ModuleInterface, args: TrainerArguments, trainer_backend: Optional[trn.TrainerBackend] = None, checkpointer: Optional[AbstractCheckpointer] = None)\n")),(0,i.kt)("p",null,"Initializes stats, writers, trainer_backend and other helper functions"),(0,i.kt)("h4",{id:"train-1"},"train"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | train()\n")),(0,i.kt)("p",null,"Train and validate the model"),(0,i.kt)("h4",{id:"validate-1"},"validate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | validate()\n")),(0,i.kt)("p",null,"Run evaluation over multiple validation dataloaders"),(0,i.kt)("h4",{id:"save_checkpoint"},"save","_","checkpoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | save_checkpoint(force=False) -> None\n")),(0,i.kt)("p",null,"Checkpoint the current state of the Trainer, TrainerBackend, and ModuleInterface."),(0,i.kt)("p",null,"Saves state of each object in a dictionary by calling on their get_state() methods and\nproviding the states to the checkpointer","'","s save() method."),(0,i.kt)("h4",{id:"save_model_checkpoint"},"save","_","model","_","checkpoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | save_model_checkpoint() -> None\n")),(0,i.kt)("p",null,"Checkpoint the current state of the ModuleInterface, used to save the final model in the\ntraining loop."),(0,i.kt)("p",null,"Saves state of the ModuleInterface by calling on it","'","s get_state() method and providing it\nto the checkpointer","'","s save_model() method."),(0,i.kt)("h4",{id:"load_checkpoints"},"load","_","checkpoints"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | load_checkpoints() -> Checkpoint\n")),(0,i.kt)("p",null,"Load state of Trainer, TrainerBackend, and ModuleInterface from checkpoint."),(0,i.kt)("p",null,"Loading logic is determined by the checkpointer used, see DefaultCheckpointer\nfor default implementation logic. If a checkpoint is loaded, all module\nstates are updated."),(0,i.kt)("h4",{id:"get_state"},"get","_","state"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | get_state() -> dict\n")),(0,i.kt)("p",null,"Get the current state of the Trainer for checkpointing."),(0,i.kt)("p",null,"Default implementation returns epochs finished, override to include\naditional state properties."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state_dict")," ",(0,i.kt)("em",{parentName:"li"},"dict")," - Dictionary of variables or objects to checkpoint.")),(0,i.kt)("h4",{id:"update_state"},"update","_","state"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | update_state(state: dict) -> None\n")),(0,i.kt)("p",null,"Update the Trainer","'","s state from a checkpointed state."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("p",null,"  state : Output of get_state() during checkpointing."),(0,i.kt)("h4",{id:"device"},"device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | device()\n")),(0,i.kt)("p",null,"The torch device either CPU or GPU, and the local rank."),(0,i.kt)("p",null,"Note: _fetch_rank() should have already been called\nbefore calling device."),(0,i.kt)("h4",{id:"train_step_batch_size"},"train","_","step","_","batch","_","size"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | train_step_batch_size()\n")),(0,i.kt)("p",null,"Returns micro batch sizes for training. Splits batch into smaller step batches such that"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. Each step batch fits into memory\n2. step batch size are a factor of global batch size per gpu\n3. attain maxium batch size that follows 1 and 2\n")),(0,i.kt)("h4",{id:"estimated_global_steps_per_epoch"},"estimated","_","global","_","steps","_","per","_","epoch"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," | @property\n | estimated_global_steps_per_epoch()\n")),(0,i.kt)("p",null,"Estimate the number of global steps per epoch."),(0,i.kt)("p",null,"Compute the maximum number of global steps as len(dataloader) // gradient_accumulation + 1.\nIf max_train_steps_per_epoch is provided we return the minimum of the two."),(0,i.kt)("p",null,"Note: SequentialSampler is used to get the train dataloader regardless of\nthe sampler provided by trainer_backend as we only require the length of the dataloader."),(0,i.kt)("p",null,"Do not change this logic without testing thorougly. There is a test case already written."),(0,i.kt)("p",null,"TODO: simplify this by initiliaizing distributed environment before calling this and remove SequentialSampler."))}s.isMDXComponent=!0}}]);