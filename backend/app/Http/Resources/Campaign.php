<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Campaign extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'campaigns' => $this->campaigns,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
