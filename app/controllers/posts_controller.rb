class PostsController < ApplicationController
  def index
    @posts = Post.all.order("id DESC")
  end

  def create
    post = Post.create(contents: params[:contents], checked: false)
    render json: { post: post }
    # Post.create(contents: params[:contents])
    # redirect_to action: :index
  end

  def checked
    post = Post.find(params[:id])
    if post.checked
      post.update(checked: false)
    else
      post.update(checked: true)
    end

    item = Post.find(params[:id])
    render json: { post: item }
  end

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
