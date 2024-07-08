import auth from "../assets/author.jpeg";
const About = ()=>{
    return(
        <div className="flex flex-col mt-1 lg:mt-5 px-2 py-3" id="about">
        <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" >about section</h2>
        <div className="flex flex-col sm:flex-row justify-center my-10 ">
            <img className="border mx-5 sm:mt-5 h-20 w-20 " src={auth} alt="author" />
            <p className="lg:mx-5 md:mx-5 my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quos quia dolore dolores aut maiores, harum voluptatem reiciendis, rem tempora vero consequatur? Iure facere doloribus, assumenda sint animi minus excepturi?</p>
        </div>
        <div className="flex justify-center my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam veniam, ad qui error sint quia harum suscipit repudiandae perspiciatis id quo debitis praesentium corrupti dolorem cumque ipsum officia enim.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sunt neque atque quia itaque ullam inventore aut, quam ipsa asperiores. Aspernatur consectetur ipsa, unde aliquid nulla ab aperiam necessitatibus. Libero?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, exercitationem qui debitis possimus totam harum? Quo error ipsam est tempora amet autem facilis nihil qui fugiat optio. Possimus, obcaecati impedit?
        </div>
        <div className="flex flex-col sm:flex-row sm:my-5 justify-center my-5">
            <img className="border mx-5 sm:mt-5 " src="" alt="img1" />
            <img className="border mx-5 sm:mt-5 " src="" alt="img2" />
            <img className="border mx-5 sm:mt-5 " src="" alt="img3" />
        </div>
        </div>
    )
}

export default About;
