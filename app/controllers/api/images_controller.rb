class Api::ImagesController < ApplicationController

  def create
    debugger
    @image = Cloudinary::Uploader.upload(params[:photo_url])
    render :show
  end
end
