class StudentsController < ApplicationController

	respond_to :json

	def index
		respond_with Student.all
	end

	def main

	end	

	def show
		@student = Student.find(params[:id])
		respond_with @student
	end

end
