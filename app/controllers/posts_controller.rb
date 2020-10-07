class PostsController < ApplicationController
  def index
    @posts = Post.all.order("id DESC")
  end

  def create
    Post.create(contents: params[:contents])
    redirect_to action: :index
  end

  # def new
  # end

  # def create
  #   Post.create(contents: params[:contents])
  # end

  # def new
  #   @post = Post.new
  # end

  # def create
  #   Post.create(post_params)
  #   redirect_to action: :index
  # end

  # private

  # def post_params
  #   params.require(:post).permit(:contents)
  # end

end
